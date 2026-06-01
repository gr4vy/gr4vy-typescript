// Summarises test coverage for the PR comment.
//
// Endpoint reach is computed from *observed HTTP calls*, not statement coverage:
// the test fetcher (tests/utils/setup.ts, gated on GR4VY_TRACK_HTTP) logs the
// method + path of every request it sends to coverage/http/*.jsonl. We map each
// `src/funcs/*.ts` operation to its (method, path-template) and mark it reached
// only if a matching request was actually sent — so a function that returns at
// local validation before issuing a request does not count.
//
// Code-coverage percentages (for the instrumented SDK surface) are read from the
// vitest v8 coverage-summary.json as a secondary signal.
//
// Writes coverage/endpoint-coverage.md (for the PR comment) and prints it.
// Exits 0 always — this is a report, not a gate.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COVERAGE_DIR = "coverage";
const FUNCS_DIR = "src/funcs";

// 1. Build the operation catalogue from the generated funcs.
const opCatalogue = readdirSync(FUNCS_DIR)
  .filter((f) => f.endsWith(".ts"))
  .map((file) => {
    const src = readFileSync(join(FUNCS_DIR, file), "utf8");
    const pathMatch = src.match(/pathToFunc\(\s*"([^"]+)"/);
    const methodMatch = src.match(/method:\s*"(GET|POST|PUT|PATCH|DELETE)"/);
    if (!pathMatch || !methodMatch) return null;
    const template = pathMatch[1];
    const regex = new RegExp(
      "^" + template.replace(/\{[^/}]+\}/g, "[^/]+").replace(/\//g, "\\/") + "$"
    );
    const params = (template.match(/\{[^/}]+\}/g) ?? []).length;
    return { op: file.replace(/\.ts$/, ""), method: methodMatch[1], template, regex, params };
  })
  .filter(Boolean);

// 2. Load observed HTTP calls (per-worker files).
let calls = [];
try {
  const dir = join(COVERAGE_DIR, "http");
  for (const f of readdirSync(dir).filter((f) => f.endsWith(".jsonl"))) {
    for (const line of readFileSync(join(dir, f), "utf8").split("\n")) {
      if (line.trim()) calls.push(JSON.parse(line));
    }
  }
} catch {
  // no logs — fetcher tracking was not enabled for this run
}

const httpTracked = calls.length > 0;

// 3. Match calls to operations.
const reached = new Set();
if (httpTracked) {
  for (const { method, pathname } of calls) {
    // A literal path like /buyers/gift-cards also matches a parameterised
    // template like /buyers/{buyer_id}, so credit the most specific operation
    // (fewest path params, then longest template).
    const op = opCatalogue
      .filter((o) => o.method === method && o.regex.test(pathname))
      .sort((a, b) => a.params - b.params || b.template.length - a.template.length)[0];
    if (op) reached.add(op.op);
  }
}

const missed = opCatalogue
  .map((o) => o.op)
  .filter((op) => !reached.has(op))
  .sort();

// 4. Code-coverage percentages (secondary signal).
let total = {};
try {
  total =
    JSON.parse(readFileSync(join(COVERAGE_DIR, "coverage-summary.json"), "utf8"))
      .total ?? {};
} catch {
  // coverage summary missing — leave percentages blank
}
const pct = (m) => (total[m]?.pct != null ? `${total[m].pct.toFixed(1)}%` : "n/a");

// 5. Render.
const lines = [];
lines.push("### 🧪 Test coverage");
lines.push("");
if (!httpTracked) {
  lines.push(
    "> ⚠️ HTTP call tracking was not enabled (set `GR4VY_TRACK_HTTP=1` for the " +
      "coverage run), so endpoint reach could not be computed from observed requests."
  );
  lines.push("");
}
const reachPct = opCatalogue.length
  ? ((reached.size / opCatalogue.length) * 100).toFixed(1)
  : "0.0";
lines.push("| Metric | Value |");
lines.push("| --- | --- |");
lines.push(
  `| **Endpoints reached (HTTP)** | ${reached.size} / ${opCatalogue.length} (${reachPct}%) |`
);
lines.push(`| Statements | ${pct("statements")} |`);
lines.push(`| Branches | ${pct("branches")} |`);
lines.push(`| Functions | ${pct("functions")} |`);
lines.push(`| Lines | ${pct("lines")} |`);
lines.push("");
if (httpTracked && missed.length) {
  lines.push(
    `> ⚠️ **${missed.length} endpoint operation(s) have no E2E test.** ` +
      `Newly generated endpoints show up here — consider adding tests for them.`
  );
  lines.push("");
  for (const name of missed) lines.push(`- \`${name}\``);
} else if (httpTracked) {
  lines.push("✅ Every endpoint operation was reached by a real request.");
}
lines.push("");
lines.push(
  "<sub>Endpoint reach is measured from HTTP requests actually sent by the " +
    "suite (see tests/utils/setup.ts). Code coverage is for `src/funcs` + " +
    "`src/sdk`. See [TESTING.md](../TESTING.md).</sub>"
);

const markdown = lines.join("\n");
writeFileSync(join(COVERAGE_DIR, "endpoint-coverage.md"), markdown + "\n");
console.log(markdown);
