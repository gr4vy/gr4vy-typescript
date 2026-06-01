import crypto from "crypto";
import fs from "fs";
import path from "path";
import { Gr4vy, withToken } from "../../src";
import { HTTPClient } from "../../src/lib/http";

const loadPrivateKey = (): string => {
  let privateKey = process.env["PRIVATE_KEY"];

  if (!privateKey) {
    const filename = path.resolve(__dirname, "./../../private_key.pem");
    privateKey = String(fs.readFileSync(filename));
  }

  return privateKey;
};

// When GR4VY_TRACK_HTTP is set (the CI coverage job sets it), record every
// outgoing request's method + path. scripts/endpoint-coverage.mjs uses these to
// compute endpoint reach from *observed HTTP calls* rather than statement
// coverage, so an operation only counts as reached if a request was actually
// sent. Each worker writes its own file to avoid cross-process races.
const httpLogDir = path.resolve(__dirname, "./../../coverage/http");
let httpLogFile: string | undefined;
const recordHttpCall = (method: string, url: string): void => {
  if (!process.env["GR4VY_TRACK_HTTP"]) return;
  try {
    if (!httpLogFile) {
      fs.mkdirSync(httpLogDir, { recursive: true });
      const suffix = crypto.randomBytes(4).toString("hex");
      httpLogFile = path.join(httpLogDir, `calls-${process.pid}-${suffix}.jsonl`);
    }
    const pathname = new URL(url).pathname;
    fs.appendFileSync(httpLogFile, JSON.stringify({ method, pathname }) + "\n");
  } catch {
    // best-effort instrumentation; never fail a test because of it
  }
};

const httpClient = new HTTPClient({
  /**
   * Adds a custom HTTP client that inserts random fields in the response,
   * ensuring we test for forward compatibility.
   */
  fetcher: async (request) => {
    if (request instanceof Request) {
      recordHttpCall(request.method, request.url);
    }
    const originalResponse = await fetch(request);
    const contentType = originalResponse.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return originalResponse;
    }

    try {
      const data = await originalResponse.clone().json();
      const randomKey = `unexpected_field_${Math.floor(Math.random() * 1000)}`;
      data[randomKey] = "this is an injected test value";

      const modifiedBody = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json',
      });

      const modifiedResponse = new Response(modifiedBody, {
        status: originalResponse.status,
        statusText: originalResponse.statusText,
        headers: originalResponse.headers,
      });

      return modifiedResponse;
    } catch (error) {
      console.error("Failed to parse JSON, returning original response:", error);
      return originalResponse;
    }
  },
});

export const createGr4vyClient = (
  privateKey: string,
  merchantAccountId?: string
): Gr4vy => {
  return new Gr4vy({
    httpClient: httpClient,
    server: "sandbox",
    id: "e2e",
    merchantAccountId,
    bearerAuth: withToken({ privateKey }),
  });
};

export interface TestMerchant {
  /** Merchant-scoped client, with a `mock-card` payment service provisioned. */
  client: Gr4vy;
  /** The randomly generated merchant account id this client is scoped to. */
  merchantAccountId: string;
  /** The private key, for spinning up additional clients in the same suite. */
  privateKey: string;
}

/**
 * Provisions an isolated merchant account with a `mock-card` payment service and
 * returns a merchant-scoped client plus its identifiers. Each test file should
 * call this once in `beforeAll` so files never share state and can run in
 * parallel across vitest workers / CI shards.
 */
export const setupMerchant = async (): Promise<TestMerchant> => {
  const privateKey = loadPrivateKey();
  const adminClient = createGr4vyClient(privateKey);
  const merchantAccountId = crypto.randomBytes(8).toString("hex");
  const merchantAccount = await adminClient.merchantAccounts.create({
    id: merchantAccountId,
    displayName: merchantAccountId,
  });
  const client = createGr4vyClient(privateKey, merchantAccount.id);
  await client.paymentServices.create({
    acceptedCountries: ["US"],
    acceptedCurrencies: ["USD"],
    displayName: "Payment service",
    paymentServiceDefinitionId: "mock-card",
    fields: [{ key: "merchant_id", value: "test" }],
  });

  return { client, merchantAccountId: merchantAccount.id, privateKey };
};

/**
 * Back-compat helper used by the original suites: returns only the merchant
 * client. New suites should prefer {@link setupMerchant} when they need the
 * merchant id (e.g. to namespace external identifiers).
 */
export const setupEnvironment = async (): Promise<Gr4vy> => {
  const { client } = await setupMerchant();
  return client;
};

export const cleanupEnvironment = async (): Promise<void> => {
  // Merchant accounts in the sandbox are disposable and left in place; there is
  // no public delete endpoint for them, so cleanup is intentionally a no-op.
};
