import crypto from "crypto";
import fs from "fs";
import path from "path";
import { Gr4vy, withToken } from "../../src";

const loadPrivateKey = (): string => {
  let privateKey = process.env.GR4VY_PRIVATE_KEY;

  if (!privateKey) {
    const filename = path.resolve(__dirname, "./../../private_key.pem");
    privateKey = String(fs.readFileSync(filename));
  }

  return privateKey;
};

const createGr4vyClient = (
  privateKey: string,
  merchantAccountId?: string
): Gr4vy => {
  return new Gr4vy({
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
