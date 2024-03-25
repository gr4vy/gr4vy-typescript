import keyto from "@trust/keyto";
import jwt from "jsonwebtoken";
import { jwkThumbprintByEncoding } from "jwk-thumbprint";
import snakeCaseKeys from "snakecase-keys";
import { v4 as uuid } from "uuid";

import { SDK_METADATA } from "./config";
import { Security } from "../models/components/security";
import { CartItem } from "../models/components/cartitem";
import { HTTPClient } from "./http";

/**
 * Attempts to detect the JS runtime and its version based on available globals.
 */
function getRuntime() {
  if (
    typeof navigator !== "undefined" &&
    typeof navigator.userAgent === "string"
  ) {
    return navigator.userAgent;
  }

  const gt: unknown = globalThis;
  if (
    typeof gt === "object" &&
    gt != null &&
    "process" in gt &&
    typeof gt.process === "object" &&
    gt.process != null &&
    "version" in gt.process &&
    typeof gt.process.version === "string"
  ) {
    return `Node.js/${gt.process.version}`;
  }

  return "<unknown-runtime>";
}

const ua = getRuntime();
const issuer = `Gr4vy Node SDK ${SDK_METADATA.sdkVersion} - ${ua}`;

export const withBearerToken = (options: {
  client?: HTTPClient;
  privateKey: string;
  scopes?: JWTScope[] | string[];
  expiresIn?: string;
}): (() => Promise<Security>) => {
  const {
    privateKey,
    scopes = [JWTScope.ReadAll, JWTScope.WriteAll],
    expiresIn = "30s",
  } = options;

  return async (): Promise<Security> => {
    const bearerAuth = await getBearerToken(privateKey, { scopes, expiresIn });
    return { bearerAuth };
  };
};

export async function getBearerToken(
  privateKey: string,
  options: {
    scopes: JWTScope[] | string[];
    expiresIn: string;
    embedParams?: EmbedParams;
    checkoutSessionId?: string;
  }
): Promise<string> {
  const { scopes, expiresIn, embedParams, checkoutSessionId } = options;

  const keyid = await getKeyId(privateKey);
  const claims: Claims = { scopes };

  if (checkoutSessionId) {
    claims["checkout_session_id"] = checkoutSessionId;
  }

  if (scopes.includes(JWTScope.Embed) && embedParams) {
    const connOptions =
      embedParams.connectionOptions || embedParams["connectionOptions"];
    claims["embed"] = snakeCaseKeys(embedParams, { exclude: ["metadata"] });
    claims["embed"]["connection_options"] = connOptions;
  }

  return jwt.sign(claims, privateKey, {
    algorithm: "ES512",
    keyid,
    jwtid: uuid(),
    expiresIn,
    notBefore: "0s",
    issuer,
  });
}

async function getKeyId(privateKey: string): Promise<string> {
  const jwk = keyto.from(privateKey, "pem").toJwk("private");

  const keyid = jwkThumbprintByEncoding(
    stripUndefined(jwk),
    "SHA-256",
    "base64url"
  );
  if (keyid == null) {
    throw new Error("Failed to generate jwk thumbprint");
  }

  return keyid;
}

function stripUndefined<T extends {}>(
  obj: T
): { [K in keyof T]?: Exclude<T[K], undefined> } {
  const newObj: { [K in keyof T]?: Exclude<T[K], undefined> } = {};
  const target: Record<string, unknown> = newObj;

  for (const entry of Object.entries(obj)) {
    const [key, value] = entry;

    if (typeof value !== "undefined") {
      target[key] = value;
    }
  }

  return newObj;
}

export enum JWTScope {
  ReadAll = "*.read",
  WriteAll = "*.write",
  Embed = "embed",
  AntiFraudServiceDefinitionsRead = "anti-fraud-service-definitions.read",
  AntiFraudServiceDefinitionsWrite = "anti-fraud-service-definitions.write",
  AntiFraudServicesRead = "anti-fraud-services.read",
  AntiFraudServicesWrite = "anti-fraud-services.write",
  AuditLogsRead = "audit-logs.read",
  BuyersRead = "buyers.read",
  BuyersWrite = "buyers.write",
  BuyersBillingDetailsRead = "buyers.billingDetails.read",
  BuyersBillingDetailsWrite = "buyers.billingDetails.write",
  CardSchemeDefinitionsRead = "card-scheme-definitions.read",
  CheckoutSessionsRead = "checkout-sessions.read",
  CheckoutSessionsWrite = "checkout-sessions.write",
  ConnectionsRead = "connections.read",
  ConnectionsWrite =  "connections.write",
  DigitalWalletsRead = "digital-wallets.read",
  DigitalWalletsWrite = "digital-wallets.write",
  FlowsRead = "flows.read",
  FlowsWrite = "flows.write",
  GiftCardServiceDefinitionsRead = "gift-card-service-definitions.read",
  GiftCardServicesRead = "gift-card-services.read",
  GiftCardServicesWrite = "gift-card-services.write",
  GiftCardsRead = "gift-cards.read",
  GiftCardsWrite = "gift-cards.write",
  MerchantAccountRead = "merchant-accounts.reads",
  MerchantAccountWrite = "merchant-accounts.write",
  PaymentMethodDefinitionsRead = "payment-method-definitions.read",
  PaymentMethodRead = "payment-methods.read",
  PaymentMethodWrite = "payment-methods.write",
  PaymentOptionsRead = "payment-options.read",
  PaymentServiceDefinitionsRead = "payment-service-definitions.read",
  PaymentServicesRead = "payment-services.read",
  PaymentServicesWrite = "payment-services.write",
  ReportsRead = "reports.read",
  ReportsWrite = "reports.write",
  TransactionsRead = "transactions.read",
  TransactionsWrite = "transactions.write",
  VaultForwardWrite = "vault-forward.write",
}

export type EmbedParams = {
  amount: number;
  currency: string;
  buyerId?: string;
  buyerExternalIdentifier?: string;
  metadata?: Record<string, string>;
  cartItems?: Array<CartItem>;
  merchantAccountId?: string;
  connectionOptions?: Record<string, any>;
};

type Claims = {
  scopes: JWTScope[] | string[];
  checkout_session_id?: string;
  embed?: Record<string, unknown>;
};
