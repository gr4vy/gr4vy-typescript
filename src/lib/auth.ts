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
  scopes?: JWTScope[];
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
    scopes: JWTScope[];
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
      embedParams.connectionOptions || embedParams["connection_options"];
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

export async function updateBearerToken(
  privateKey: string,
  token: string,
  options: {
    expiresIn: string;
    embedParams?: EmbedParams;
  }
): Promise<string> {
  const { expiresIn = "30s", embedParams } = options;

  const payload = jwt.verify(token, privateKey, {
    algorithms: ["ES512"],
    ignoreExpiration: true,
  });

  if (typeof payload !== "object") {
    throw new Error("Invalid JWS payload");
  }

  const { scopes, checkout_session_id: checkoutSessionId, embed } = payload;

  return getBearerToken(privateKey, {
    scopes,
    expiresIn,
    embedParams: embedParams ?? embed,
    checkoutSessionId,
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
  BuyersRead = "buyers.read",
  BuyersWrite = "buyers.write",
  PaymentMethodRead = "payment-methods.read",
  PaymentMethodWrite = "payment-methods.write",
  PaymentOptionsRead = "payment-options.read",
  PaymentServiceDefinitionsRead = "payment-service-definitions.read",
  PaymentServicesRead = "payment-services.read",
  PaymentServicesWrite = "payment-services.write",
  TransactionsRead = "transactions.read",
  TransactionsWrite = "transactions.write",
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
  /** @deprecated use `connectionOptions` instead */
  connection_options?: Record<string, any>;
};

type Claims = {
  scopes: JWTScope[];
  checkout_session_id?: string;
  embed?: Record<string, unknown>;
};
