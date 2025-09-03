import crypto from "crypto";
import fs from "fs";
import path from "path";
import { Gr4vy, withToken } from "../../src";
import { HTTPClient } from "../../src/lib/http";

const loadPrivateKey = (): string => {
  let privateKey = process.env.PRIVATE_KEY;

  if (!privateKey) {
    const filename = path.resolve(__dirname, "./../../private_key.pem");
    privateKey = String(fs.readFileSync(filename));
  }

  return privateKey;
};

const httpClient = new HTTPClient({
  /**
   * Adds a custom HTTP client that inserts random fields in the response,
   * ensuring we test for forward compatibility. 
   */
  fetcher: async (request) => {
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

const createGr4vyClient = (
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

export const setupEnvironment = async (): Promise<Gr4vy> => {
  // Create a merchant account
  const privateKey = loadPrivateKey();
  const adminClient = createGr4vyClient(privateKey);
  const merchantAccountId = crypto.randomBytes(8).toString("hex");
  const merchantAccount = await adminClient.merchantAccounts.create({
    id: merchantAccountId,
    displayName: merchantAccountId,
  });
  const merchantClient = createGr4vyClient(privateKey, merchantAccount.id);
  // Setup a payment service
  await merchantClient.paymentServices.create({
    acceptedCountries: ["US"],
    acceptedCurrencies: ["USD"],
    displayName: "Payment service",
    paymentServiceDefinitionId: "mock-card",
    fields: [{ key: "merchant_id", value: "test" }],
  });

  return merchantClient;
};

export const cleanupEnvironment = async (): Promise<void> => {
  // no-op
};
