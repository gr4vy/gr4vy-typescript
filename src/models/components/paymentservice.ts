/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Field,
  Field$inboundSchema,
  Field$Outbound,
  Field$outboundSchema,
} from "./field.js";
import {
  MerchantProfileSchemeSummary,
  MerchantProfileSchemeSummary$inboundSchema,
  MerchantProfileSchemeSummary$Outbound,
  MerchantProfileSchemeSummary$outboundSchema,
} from "./merchantprofileschemesummary.js";
import {
  Method,
  Method$inboundSchema,
  Method$outboundSchema,
} from "./method.js";
import {
  PaymentServiceStatus,
  PaymentServiceStatus$inboundSchema,
  PaymentServiceStatus$outboundSchema,
} from "./paymentservicestatus.js";

export type PaymentService = {
  /**
   * Always `payment-service`
   */
  type?: "payment-service" | undefined;
  id?: string | undefined;
  /**
   * The ID of the merchant account this job belongs to.
   */
  merchantAccountId: string;
  /**
   * The definition ID of the service that has been configured.
   */
  paymentServiceDefinitionId: string;
  /**
   * Defines if this payment service is currently active.
   */
  active?: boolean | undefined;
  method: Method;
  /**
   * The display name for the payment service.
   */
  displayName: string;
  /**
   * Deprecated field used to define the order in which to process payment services
   */
  position: number;
  status?: PaymentServiceStatus | undefined;
  /**
   * A list of currencies for which this service is enabled, in ISO 4217 three-letter code format.
   */
  acceptedCurrencies: Array<string>;
  /**
   * A list of countries for which this service is enabled, in ISO two-letter code format.
   */
  acceptedCountries: Array<string>;
  /**
   * Defines if this payment service support payment method tokenization.
   */
  paymentMethodTokenizationEnabled: boolean;
  /**
   * Defines if this payment service supports network tokens.
   */
  networkTokensEnabled: boolean;
  /**
   * Defines if this payment service is open loop.
   */
  openLoop: boolean;
  /**
   * Defines if this payment service has settlement reporting enabled.
   */
  settlementReportingEnabled: boolean;
  /**
   * Defines if this payment service has 3DS enabled.
   */
  threeDSecureEnabled?: boolean | null | undefined;
  /**
   * An object containing a key for each supported card schemes, and for each key an object with the 3DS profile for this service for that scheme.
   */
  merchantProfile?:
    | { [k: string]: MerchantProfileSchemeSummary | null }
    | null
    | undefined;
  /**
   * The URL that needs to be configured with this payment service as the receiving endpoint for webhooks from the service to our system. Currently, we dp not yet automatically register webhooks on setup, and therefore webhooks need to be registered manually by the merchant.
   */
  webhookUrl?: string | null | undefined;
  /**
   * The non-secret credential fields that have been configured for this payment service. Any secret fields are omitted.
   */
  fields?: Array<Field> | null | undefined;
  /**
   * The non-secret reporting fields that have been configured for this payment service. Any secret fields are omitted.
   */
  reportingFields?: Array<Field> | null | undefined;
  /**
   * Defines if this payment service has been deleted
   */
  isDeleted?: boolean | undefined;
  /**
   * The date and time when this payment service was first created in our system.
   */
  createdAt: Date;
  /**
   * The date and time when this payment service was last updated in our system.
   */
  updatedAt: Date;
};

/** @internal */
export const PaymentService$inboundSchema: z.ZodType<
  PaymentService,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("payment-service").default("payment-service"),
  id: z.string().default("The ID of the payment service"),
  merchant_account_id: z.string(),
  payment_service_definition_id: z.string(),
  active: z.boolean().default(true),
  method: Method$inboundSchema,
  display_name: z.string(),
  position: z.number().int(),
  status: PaymentServiceStatus$inboundSchema.optional(),
  accepted_currencies: z.array(z.string()),
  accepted_countries: z.array(z.string()),
  payment_method_tokenization_enabled: z.boolean(),
  network_tokens_enabled: z.boolean(),
  open_loop: z.boolean(),
  settlement_reporting_enabled: z.boolean(),
  three_d_secure_enabled: z.nullable(z.boolean()).optional(),
  merchant_profile: z.nullable(
    z.record(z.nullable(MerchantProfileSchemeSummary$inboundSchema)),
  ).optional(),
  webhook_url: z.nullable(z.string()).optional(),
  fields: z.nullable(z.array(Field$inboundSchema)).optional(),
  reporting_fields: z.nullable(z.array(Field$inboundSchema)).optional(),
  is_deleted: z.boolean().default(false),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "merchant_account_id": "merchantAccountId",
    "payment_service_definition_id": "paymentServiceDefinitionId",
    "display_name": "displayName",
    "accepted_currencies": "acceptedCurrencies",
    "accepted_countries": "acceptedCountries",
    "payment_method_tokenization_enabled": "paymentMethodTokenizationEnabled",
    "network_tokens_enabled": "networkTokensEnabled",
    "open_loop": "openLoop",
    "settlement_reporting_enabled": "settlementReportingEnabled",
    "three_d_secure_enabled": "threeDSecureEnabled",
    "merchant_profile": "merchantProfile",
    "webhook_url": "webhookUrl",
    "reporting_fields": "reportingFields",
    "is_deleted": "isDeleted",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type PaymentService$Outbound = {
  type: "payment-service";
  id: string;
  merchant_account_id: string;
  payment_service_definition_id: string;
  active: boolean;
  method: string;
  display_name: string;
  position: number;
  status?: string | undefined;
  accepted_currencies: Array<string>;
  accepted_countries: Array<string>;
  payment_method_tokenization_enabled: boolean;
  network_tokens_enabled: boolean;
  open_loop: boolean;
  settlement_reporting_enabled: boolean;
  three_d_secure_enabled?: boolean | null | undefined;
  merchant_profile?:
    | { [k: string]: MerchantProfileSchemeSummary$Outbound | null }
    | null
    | undefined;
  webhook_url?: string | null | undefined;
  fields?: Array<Field$Outbound> | null | undefined;
  reporting_fields?: Array<Field$Outbound> | null | undefined;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
};

/** @internal */
export const PaymentService$outboundSchema: z.ZodType<
  PaymentService$Outbound,
  z.ZodTypeDef,
  PaymentService
> = z.object({
  type: z.literal("payment-service").default("payment-service" as const),
  id: z.string().default("The ID of the payment service"),
  merchantAccountId: z.string(),
  paymentServiceDefinitionId: z.string(),
  active: z.boolean().default(true),
  method: Method$outboundSchema,
  displayName: z.string(),
  position: z.number().int(),
  status: PaymentServiceStatus$outboundSchema.optional(),
  acceptedCurrencies: z.array(z.string()),
  acceptedCountries: z.array(z.string()),
  paymentMethodTokenizationEnabled: z.boolean(),
  networkTokensEnabled: z.boolean(),
  openLoop: z.boolean(),
  settlementReportingEnabled: z.boolean(),
  threeDSecureEnabled: z.nullable(z.boolean()).optional(),
  merchantProfile: z.nullable(
    z.record(z.nullable(MerchantProfileSchemeSummary$outboundSchema)),
  ).optional(),
  webhookUrl: z.nullable(z.string()).optional(),
  fields: z.nullable(z.array(Field$outboundSchema)).optional(),
  reportingFields: z.nullable(z.array(Field$outboundSchema)).optional(),
  isDeleted: z.boolean().default(false),
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    merchantAccountId: "merchant_account_id",
    paymentServiceDefinitionId: "payment_service_definition_id",
    displayName: "display_name",
    acceptedCurrencies: "accepted_currencies",
    acceptedCountries: "accepted_countries",
    paymentMethodTokenizationEnabled: "payment_method_tokenization_enabled",
    networkTokensEnabled: "network_tokens_enabled",
    openLoop: "open_loop",
    settlementReportingEnabled: "settlement_reporting_enabled",
    threeDSecureEnabled: "three_d_secure_enabled",
    merchantProfile: "merchant_profile",
    webhookUrl: "webhook_url",
    reportingFields: "reporting_fields",
    isDeleted: "is_deleted",
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentService$ {
  /** @deprecated use `PaymentService$inboundSchema` instead. */
  export const inboundSchema = PaymentService$inboundSchema;
  /** @deprecated use `PaymentService$outboundSchema` instead. */
  export const outboundSchema = PaymentService$outboundSchema;
  /** @deprecated use `PaymentService$Outbound` instead. */
  export type Outbound = PaymentService$Outbound;
}

export function paymentServiceToJSON(paymentService: PaymentService): string {
  return JSON.stringify(PaymentService$outboundSchema.parse(paymentService));
}

export function paymentServiceFromJSON(
  jsonString: string,
): SafeParseResult<PaymentService, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentService$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentService' from JSON`,
  );
}
