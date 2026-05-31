// Summarises test coverage for the PR comment.
//
// Reads the vitest v8 `coverage-summary.json` and reports two things:
//   1. Endpoint reach — `src/funcs/*.ts` is one file per API operation, so the
//      number of those files with any executed statement is the number of
//      endpoints the suite actually hit.
//   2. Overall code coverage for the instrumented SDK surface.
//
// Writes a Markdown table to coverage/endpoint-coverage.md (for the PR comment)
// and prints it to stdout. Exits 0 always — this is a report, not a gate.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COVERAGE_DIR = "coverage";
const summaryPath = join(COVERAGE_DIR, "coverage-summary.json");

let summary;
try {
  summary = JSON.parse(readFileSync(summaryPath, "utf8"));
} catch {
  console.error(
    `Could not read ${summaryPath}. Run \`vitest run --coverage\` first.`
  );
  process.exit(0);
}

const isFunc = (file) => /[\\/]src[\\/]funcs[\\/][^\\/]+\.ts$/.test(file);
const covered = (entry) => (entry?.statements?.covered ?? 0) > 0;

const funcs = Object.entries(summary).filter(([file]) => isFunc(file));
const reached = funcs.filter(([, entry]) => covered(entry));
const missed = funcs
  .filter(([, entry]) => !covered(entry))
  .map(([file]) => file.split(/[\\/]/).pop().replace(/\.ts$/, ""))
  .sort();

const total = summary.total ?? {};
const pct = (m) => (total[m]?.pct ?? 0).toFixed(1);
const endpointPct = funcs.length
  ? ((reached.length / funcs.length) * 100).toFixed(1)
  : "0.0";

const lines = [];
lines.push("### 🧪 Test coverage");
lines.push("");
lines.push("| Metric | Value |");
lines.push("| --- | --- |");
lines.push(`| **Endpoints reached** | ${reached.length} / ${funcs.length} (${endpointPct}%) |`);
lines.push(`| Statements | ${pct("statements")}% |`);
lines.push(`| Branches | ${pct("branches")}% |`);
lines.push(`| Functions | ${pct("functions")}% |`);
lines.push(`| Lines | ${pct("lines")}% |`);
lines.push("");
if (missed.length) {
  lines.push(`> ⚠️ **${missed.length} endpoint operation(s) have no E2E test.** ` +
    `Newly generated endpoints show up here — consider adding tests for them.`);
  lines.push("");
  for (const name of missed) lines.push(`- \`${name}\``);
} else {
  lines.push("✅ Every endpoint operation was reached by the suite.");
}
lines.push("");
lines.push("<sub>`src/funcs/*` is one file per API operation; coverage over that directory is the endpoint-reach metric. See [TESTING.md](../TESTING.md).</sub>");

const markdown = lines.join("\n");
writeFileSync(join(COVERAGE_DIR, "endpoint-coverage.md"), markdown + "\n");
console.log(markdown);
