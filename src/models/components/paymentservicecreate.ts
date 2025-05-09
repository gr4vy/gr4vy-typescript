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
  MerchantProfileScheme,
  MerchantProfileScheme$inboundSchema,
  MerchantProfileScheme$Outbound,
  MerchantProfileScheme$outboundSchema,
} from "./merchantprofilescheme.js";

/**
 * Request body for activating a payment service
 */
export type PaymentServiceCreate = {
  /**
   * The display name for the payment service.
   */
  displayName: string;
  /**
   * The definition ID of the service to configure.
   */
  paymentServiceDefinitionId: string;
  /**
   * The non-secret credential fields that have been configured for this payment service. Any secret fields are omitted.
   */
  fields: Array<Field>;
  /**
   * The non-secret reporting fields that have been configured for this payment service. Any secret fields are omitted.
   */
  reportingFields?: Array<Field> | null | undefined;
  /**
   * Deprecated field used to define the order in which to process payment services
   */
  position?: number | null | undefined;
  /**
   * A list of currencies for which this service is enabled, in ISO 4217 three-letter code format.
   */
  acceptedCurrencies: Array<string>;
  /**
   * A list of countries for which this service is enabled, in ISO two-letter code format.
   */
  acceptedCountries: Array<string>;
  /**
   * Defines if this payment service is currently active.
   */
  active?: boolean | null | undefined;
  /**
   * Defines if this payment service has 3DS enabled.
   */
  threeDSecureEnabled?: boolean | undefined;
  /**
   * An object containing a key for each supported card schemes, and for each key an object with the 3DS profile for this service for that scheme.
   */
  merchantProfile?:
    | { [k: string]: MerchantProfileScheme | null }
    | null
    | undefined;
  /**
   * Defines if this payment service support payment method tokenization.
   */
  paymentMethodTokenizationEnabled?: boolean | null | undefined;
  /**
   * Defines if this payment service supports network tokens.
   */
  networkTokensEnabled?: boolean | null | undefined;
  /**
   * Defines if this payment service is open loop.
   */
  openLoop?: boolean | null | undefined;
  /**
   * Defines if this payment service has settlement reporting enabled.
   */
  settlementReportingEnabled?: boolean | undefined;
};

/** @internal */
export const PaymentServiceCreate$inboundSchema: z.ZodType<
  PaymentServiceCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  display_name: z.string(),
  payment_service_definition_id: z.string(),
  fields: z.array(Field$inboundSchema),
  reporting_fields: z.nullable(z.array(Field$inboundSchema)).optional(),
  position: z.nullable(z.number().int()).optional(),
  accepted_currencies: z.array(z.string()),
  accepted_countries: z.array(z.string()),
  active: z.nullable(z.boolean()).optional(),
  three_d_secure_enabled: z.boolean().default(false),
  merchant_profile: z.nullable(
    z.record(z.nullable(MerchantProfileScheme$inboundSchema)),
  ).optional(),
  payment_method_tokenization_enabled: z.nullable(z.boolean()).optional(),
  network_tokens_enabled: z.nullable(z.boolean()).optional(),
  open_loop: z.nullable(z.boolean()).optional(),
  settlement_reporting_enabled: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    "display_name": "displayName",
    "payment_service_definition_id": "paymentServiceDefinitionId",
    "reporting_fields": "reportingFields",
    "accepted_currencies": "acceptedCurrencies",
    "accepted_countries": "acceptedCountries",
    "three_d_secure_enabled": "threeDSecureEnabled",
    "merchant_profile": "merchantProfile",
    "payment_method_tokenization_enabled": "paymentMethodTokenizationEnabled",
    "network_tokens_enabled": "networkTokensEnabled",
    "open_loop": "openLoop",
    "settlement_reporting_enabled": "settlementReportingEnabled",
  });
});

/** @internal */
export type PaymentServiceCreate$Outbound = {
  display_name: string;
  payment_service_definition_id: string;
  fields: Array<Field$Outbound>;
  reporting_fields?: Array<Field$Outbound> | null | undefined;
  position?: number | null | undefined;
  accepted_currencies: Array<string>;
  accepted_countries: Array<string>;
  active?: boolean | null | undefined;
  three_d_secure_enabled: boolean;
  merchant_profile?:
    | { [k: string]: MerchantProfileScheme$Outbound | null }
    | null
    | undefined;
  payment_method_tokenization_enabled?: boolean | null | undefined;
  network_tokens_enabled?: boolean | null | undefined;
  open_loop?: boolean | null | undefined;
  settlement_reporting_enabled: boolean;
};

/** @internal */
export const PaymentServiceCreate$outboundSchema: z.ZodType<
  PaymentServiceCreate$Outbound,
  z.ZodTypeDef,
  PaymentServiceCreate
> = z.object({
  displayName: z.string(),
  paymentServiceDefinitionId: z.string(),
  fields: z.array(Field$outboundSchema),
  reportingFields: z.nullable(z.array(Field$outboundSchema)).optional(),
  position: z.nullable(z.number().int()).optional(),
  acceptedCurrencies: z.array(z.string()),
  acceptedCountries: z.array(z.string()),
  active: z.nullable(z.boolean()).optional(),
  threeDSecureEnabled: z.boolean().default(false),
  merchantProfile: z.nullable(
    z.record(z.nullable(MerchantProfileScheme$outboundSchema)),
  ).optional(),
  paymentMethodTokenizationEnabled: z.nullable(z.boolean()).optional(),
  networkTokensEnabled: z.nullable(z.boolean()).optional(),
  openLoop: z.nullable(z.boolean()).optional(),
  settlementReportingEnabled: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    displayName: "display_name",
    paymentServiceDefinitionId: "payment_service_definition_id",
    reportingFields: "reporting_fields",
    acceptedCurrencies: "accepted_currencies",
    acceptedCountries: "accepted_countries",
    threeDSecureEnabled: "three_d_secure_enabled",
    merchantProfile: "merchant_profile",
    paymentMethodTokenizationEnabled: "payment_method_tokenization_enabled",
    networkTokensEnabled: "network_tokens_enabled",
    openLoop: "open_loop",
    settlementReportingEnabled: "settlement_reporting_enabled",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentServiceCreate$ {
  /** @deprecated use `PaymentServiceCreate$inboundSchema` instead. */
  export const inboundSchema = PaymentServiceCreate$inboundSchema;
  /** @deprecated use `PaymentServiceCreate$outboundSchema` instead. */
  export const outboundSchema = PaymentServiceCreate$outboundSchema;
  /** @deprecated use `PaymentServiceCreate$Outbound` instead. */
  export type Outbound = PaymentServiceCreate$Outbound;
}

export function paymentServiceCreateToJSON(
  paymentServiceCreate: PaymentServiceCreate,
): string {
  return JSON.stringify(
    PaymentServiceCreate$outboundSchema.parse(paymentServiceCreate),
  );
}

export function paymentServiceCreateFromJSON(
  jsonString: string,
): SafeParseResult<PaymentServiceCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentServiceCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentServiceCreate' from JSON`,
  );
}
