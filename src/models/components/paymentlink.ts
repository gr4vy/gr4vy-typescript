/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CartItem,
  CartItem$inboundSchema,
  CartItem$Outbound,
  CartItem$outboundSchema,
} from "./cartitem.js";
import {
  PaymentLinkStatus,
  PaymentLinkStatus$inboundSchema,
  PaymentLinkStatus$outboundSchema,
} from "./paymentlinkstatus.js";
import {
  ShippingDetails,
  ShippingDetails$inboundSchema,
  ShippingDetails$Outbound,
  ShippingDetails$outboundSchema,
} from "./shippingdetails.js";
import {
  StatementDescriptor,
  StatementDescriptor$inboundSchema,
  StatementDescriptor$Outbound,
  StatementDescriptor$outboundSchema,
} from "./statementdescriptor.js";
import {
  TransactionBuyer,
  TransactionBuyer$inboundSchema,
  TransactionBuyer$Outbound,
  TransactionBuyer$outboundSchema,
} from "./transactionbuyer.js";
import {
  TransactionIntent,
  TransactionIntent$inboundSchema,
  TransactionIntent$outboundSchema,
} from "./transactionintent.js";
import {
  TransactionPaymentSource,
  TransactionPaymentSource$inboundSchema,
  TransactionPaymentSource$outboundSchema,
} from "./transactionpaymentsource.js";

export type PaymentLink = {
  /**
   * The unique identifier for the payment link.
   */
  id: string;
  /**
   * Always `payment-link`.
   */
  type?: "payment-link" | undefined;
  /**
   * The URL for the payment link.
   */
  url: string;
  /**
   * The expiration date and time for the payment link.
   */
  expiresAt?: Date | null | undefined;
  /**
   * The merchant reference for the payment link.
   */
  externalIdentifier?: string | null | undefined;
  /**
   * The statement descriptor for the payment link.
   */
  statementDescriptor?: StatementDescriptor | null | undefined;
  /**
   * The locale for the payment link.
   */
  locale?: string | null | undefined;
  /**
   * The merchant's display name.
   */
  merchantName?: string | null | undefined;
  /**
   * The merchant's website URL.
   */
  merchantUrl?: string | null | undefined;
  /**
   * The merchant's banner image URL.
   */
  merchantBannerUrl?: string | null | undefined;
  /**
   * The merchant's brand color.
   */
  merchantColor?: string | null | undefined;
  /**
   * A message from the merchant.
   */
  merchantMessage?: string | null | undefined;
  /**
   * URL to the merchant's terms and conditions.
   */
  merchantTermsAndConditionsUrl?: string | null | undefined;
  /**
   * URL to the merchant's favicon.
   */
  merchantFaviconUrl?: string | null | undefined;
  /**
   * The amount for the payment link.
   */
  amount: number;
  /**
   * The country code for the payment link.
   */
  country: string;
  /**
   * The currency code for the payment link.
   */
  currency: string;
  intent: TransactionIntent;
  /**
   * The return URL after payment completion.
   */
  returnUrl?: string | null | undefined;
  /**
   * The cart items for the payment link.
   */
  cartItems: Array<CartItem> | null;
  /**
   * Arbitrary metadata for the payment link.
   */
  metadata?: { [k: string]: any } | null | undefined;
  /**
   * The way payment method information made it to this transaction.
   */
  paymentSource: TransactionPaymentSource;
  /**
   * The date and time the payment link was created.
   */
  createdAt: Date;
  /**
   * The date and time the payment link was last updated.
   */
  updatedAt: Date;
  status: PaymentLinkStatus;
  /**
   * The buyer associated with the payment link.
   */
  buyer?: TransactionBuyer | null | undefined;
  /**
   * The shipping details for the payment link.
   */
  shippingDetails?: ShippingDetails | null | undefined;
};

/** @internal */
export const PaymentLink$inboundSchema: z.ZodType<
  PaymentLink,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: z.literal("payment-link").default("payment-link"),
  url: z.string(),
  expires_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  external_identifier: z.nullable(z.string()).optional(),
  statement_descriptor: z.nullable(StatementDescriptor$inboundSchema)
    .optional(),
  locale: z.nullable(z.string()).optional(),
  merchant_name: z.nullable(z.string()).optional(),
  merchant_url: z.nullable(z.string()).optional(),
  merchant_banner_url: z.nullable(z.string()).optional(),
  merchant_color: z.nullable(z.string()).optional(),
  merchant_message: z.nullable(z.string()).optional(),
  merchant_terms_and_conditions_url: z.nullable(z.string()).optional(),
  merchant_favicon_url: z.nullable(z.string()).optional(),
  amount: z.number().int(),
  country: z.string(),
  currency: z.string(),
  intent: TransactionIntent$inboundSchema,
  return_url: z.nullable(z.string()).optional(),
  cart_items: z.nullable(z.array(CartItem$inboundSchema)),
  metadata: z.nullable(z.record(z.any())).optional(),
  payment_source: TransactionPaymentSource$inboundSchema,
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  status: PaymentLinkStatus$inboundSchema,
  buyer: z.nullable(TransactionBuyer$inboundSchema).optional(),
  shipping_details: z.nullable(ShippingDetails$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "expires_at": "expiresAt",
    "external_identifier": "externalIdentifier",
    "statement_descriptor": "statementDescriptor",
    "merchant_name": "merchantName",
    "merchant_url": "merchantUrl",
    "merchant_banner_url": "merchantBannerUrl",
    "merchant_color": "merchantColor",
    "merchant_message": "merchantMessage",
    "merchant_terms_and_conditions_url": "merchantTermsAndConditionsUrl",
    "merchant_favicon_url": "merchantFaviconUrl",
    "return_url": "returnUrl",
    "cart_items": "cartItems",
    "payment_source": "paymentSource",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "shipping_details": "shippingDetails",
  });
});

/** @internal */
export type PaymentLink$Outbound = {
  id: string;
  type: "payment-link";
  url: string;
  expires_at?: string | null | undefined;
  external_identifier?: string | null | undefined;
  statement_descriptor?: StatementDescriptor$Outbound | null | undefined;
  locale?: string | null | undefined;
  merchant_name?: string | null | undefined;
  merchant_url?: string | null | undefined;
  merchant_banner_url?: string | null | undefined;
  merchant_color?: string | null | undefined;
  merchant_message?: string | null | undefined;
  merchant_terms_and_conditions_url?: string | null | undefined;
  merchant_favicon_url?: string | null | undefined;
  amount: number;
  country: string;
  currency: string;
  intent: string;
  return_url?: string | null | undefined;
  cart_items: Array<CartItem$Outbound> | null;
  metadata?: { [k: string]: any } | null | undefined;
  payment_source: string;
  created_at: string;
  updated_at: string;
  status: string;
  buyer?: TransactionBuyer$Outbound | null | undefined;
  shipping_details?: ShippingDetails$Outbound | null | undefined;
};

/** @internal */
export const PaymentLink$outboundSchema: z.ZodType<
  PaymentLink$Outbound,
  z.ZodTypeDef,
  PaymentLink
> = z.object({
  id: z.string(),
  type: z.literal("payment-link").default("payment-link" as const),
  url: z.string(),
  expiresAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  externalIdentifier: z.nullable(z.string()).optional(),
  statementDescriptor: z.nullable(StatementDescriptor$outboundSchema)
    .optional(),
  locale: z.nullable(z.string()).optional(),
  merchantName: z.nullable(z.string()).optional(),
  merchantUrl: z.nullable(z.string()).optional(),
  merchantBannerUrl: z.nullable(z.string()).optional(),
  merchantColor: z.nullable(z.string()).optional(),
  merchantMessage: z.nullable(z.string()).optional(),
  merchantTermsAndConditionsUrl: z.nullable(z.string()).optional(),
  merchantFaviconUrl: z.nullable(z.string()).optional(),
  amount: z.number().int(),
  country: z.string(),
  currency: z.string(),
  intent: TransactionIntent$outboundSchema,
  returnUrl: z.nullable(z.string()).optional(),
  cartItems: z.nullable(z.array(CartItem$outboundSchema)),
  metadata: z.nullable(z.record(z.any())).optional(),
  paymentSource: TransactionPaymentSource$outboundSchema,
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
  status: PaymentLinkStatus$outboundSchema,
  buyer: z.nullable(TransactionBuyer$outboundSchema).optional(),
  shippingDetails: z.nullable(ShippingDetails$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    expiresAt: "expires_at",
    externalIdentifier: "external_identifier",
    statementDescriptor: "statement_descriptor",
    merchantName: "merchant_name",
    merchantUrl: "merchant_url",
    merchantBannerUrl: "merchant_banner_url",
    merchantColor: "merchant_color",
    merchantMessage: "merchant_message",
    merchantTermsAndConditionsUrl: "merchant_terms_and_conditions_url",
    merchantFaviconUrl: "merchant_favicon_url",
    returnUrl: "return_url",
    cartItems: "cart_items",
    paymentSource: "payment_source",
    createdAt: "created_at",
    updatedAt: "updated_at",
    shippingDetails: "shipping_details",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentLink$ {
  /** @deprecated use `PaymentLink$inboundSchema` instead. */
  export const inboundSchema = PaymentLink$inboundSchema;
  /** @deprecated use `PaymentLink$outboundSchema` instead. */
  export const outboundSchema = PaymentLink$outboundSchema;
  /** @deprecated use `PaymentLink$Outbound` instead. */
  export type Outbound = PaymentLink$Outbound;
}

export function paymentLinkToJSON(paymentLink: PaymentLink): string {
  return JSON.stringify(PaymentLink$outboundSchema.parse(paymentLink));
}

export function paymentLinkFromJSON(
  jsonString: string,
): SafeParseResult<PaymentLink, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentLink$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentLink' from JSON`,
  );
}
