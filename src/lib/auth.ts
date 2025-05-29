import jwt, { JwtPayload } from "jsonwebtoken";
import snakeCaseKeys from "snakecase-keys";
import { v4 as uuid } from "uuid";

import { CartItem } from "../models/components";
import { SDK_METADATA } from "./config";
import { getKeyId } from "./helpers";

/**
 * Helper method for generating a bearer token for use with the SDK
 */
export const withToken = (options: {
  privateKey: string;
  scopes?: JWTScope[] | string[];
  expiresIn?: string;
}): (() => Promise<string>) => {
  const {
    privateKey,
    scopes = [JWTScope.ReadAll, JWTScope.WriteAll],
    expiresIn = "30s",
  } = options;

  if (!privateKey) {
    throw new Error("Private key is null, undefined or empty");
  }

  return async (): Promise<string> => {
    const bearerAuth = await getToken({ privateKey, scopes, expiresIn });
    return bearerAuth;
  };
};

/**
 * Helper method for generating a bearer token for use with and without the SDK
 */
export const getToken = async (options: {
  privateKey: string;
  expiresIn?: string;
  scopes?: JWTScope[] | string[];
  embedParams?: EmbedParams;
  checkoutSessionId?: string;
}): Promise<string> => {
  const {
    privateKey,
    checkoutSessionId,
    embedParams,
    scopes = [JWTScope.ReadAll, JWTScope.WriteAll],
    expiresIn = "30s",
  } = options;

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
    issuer: SDK_METADATA.userAgent,
  });
};

export const updateToken = async (options: {
  token: string
  privateKey: string;
  expiresIn?: string;
  scopes?: JWTScope[] | string[];
  embedParams?: EmbedParams;
  checkoutSessionId?: string;
}): Promise<string> => {
  const {
    token,
    privateKey,
    scopes,
    checkoutSessionId,
    embedParams,
    expiresIn = "30s",
  } = options;

  const payload = jwt.verify(token, privateKey, {
    algorithms: ['ES512'],
    ignoreExpiration: true,
  }) as JwtPayload | Claims


  return getToken({
    privateKey,
    scopes: scopes ?? payload.scopes,
    expiresIn,
    embedParams: embedParams ?? payload.embed,
    checkoutSessionId: checkoutSessionId ?? payload.checkout_session_id
  })
}

/**
 * Helper method for generating a bearer token for use with Embed
 */
export const getEmbedToken = async (options: {
  privateKey: string;
  embedParams?: EmbedParams;
  checkoutSessionId?: string;
}): Promise<string> => {
  return getToken({
    ...options,
    scopes: [JWTScope.Embed],
    expiresIn: '1h'
   })
}

/**
 * Short hands for scopes. Strings can be used as well.
 */
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
  ConnectionsWrite = "connections.write",
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

/**
 * Parameters that can be pinned using Embed
 */
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

/**
 * Claims that can be embedded in the JWT
 */
type Claims = {
  scopes: JWTScope[] | string[];
  checkout_session_id?: string;
  embed?: Record<string, unknown>;
};
