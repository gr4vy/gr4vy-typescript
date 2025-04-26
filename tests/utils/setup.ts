import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";
import { Gr4vy, withToken } from "../../src";


const loadPrivateKey = () : string => {
  let privateKey = process.env.GR4VY_PRIVATE_KEY;

  if (!privateKey) {
    const filename = path.resolve(__dirname, "./../../private_key.pem");
    privateKey = String(fs.readFileSync(filename));
  }

  return privateKey
};

const createGr4vyClient = (privateKey: string, merchantAccountId?: string): Gr4vy => {
  return new Gr4vy({
    server: "sandbox",    
    id: "spider",
    merchantAccountId,
    bearerAuth: withToken({ privateKey }),
  });
};

const createMerchantAccount = async (gr4vy: Gr4vy): Promise<string> => {
  const merchantAccountId = uuid();
  const merchantAccount = gr4vy.merchantAccounts.create({ id: merchantAccountId, displayName: merchantAccountId})
  return merchantAccount.id;
}

export const setupEnvironment = async (): Promise<Gr4vy> => {
  const privateKey = loadPrivateKey();
  const gr4vy = createGr4vyClient(privateKey);
  const merchantAccountId = await createMerchantAccount(gr4vy)

  return createGr4vyClient(privateKey, merchantAccountId);
  ;
};

export const cleanupEnvironment = async (): Promise<void> => {
  // no-op
};
