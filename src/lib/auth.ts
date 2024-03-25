import jwt from "jsonwebtoken";
import snakeCaseKeys from "snakecase-keys";
import { v4 as uuid } from "uuid";

import { SDK_METADATA } from "./config";
import { CartItem } from "../models/components/cartitem";
import { getKeyId, getRuntime } from "./helpers";

const ua = getRuntime();
const issuer = `Gr4vy Node SDK ${SDK_METADATA.sdkVersion} - ${ua}`;

/**
 * Helper method for generating a bearer token for use with the SDK
 */
export const withBearerAuth = (options: {
  privateKey: string;
  scopes?: JWTScope[] | string[];
  expiresIn?: string;
}): (() => Promise<string>) => {
  const {
    privateKey,
    scopes = [JWTScope.ReadAll, JWTScope.WriteAll],
    expiresIn = "30s",
  } = options;

  return async (): Promise<string> => {
    const bearerAuth = await getBearerAuth({ privateKey, scopes, expiresIn });
    return bearerAuth;
  };
};

/**
 * Helper method for generating a bearer token for use with and without the SDK
 */
export const getBearerAuth = async (options: {
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
    issuer,
  });
};

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
