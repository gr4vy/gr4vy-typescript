/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BraintreeDynamicDataFieldsOptions,
  BraintreeDynamicDataFieldsOptions$inboundSchema,
  BraintreeDynamicDataFieldsOptions$Outbound,
  BraintreeDynamicDataFieldsOptions$outboundSchema,
} from "./braintreedynamicdatafieldsoptions.js";

export type BraintreeOptions = {
  /**
   * Passes a discount amount to be applied to the transaction when using Braintree.
   */
  discountAmount?: number | null | undefined;
  /**
   * Passes `customFields` to the Braintree API when creating a new payment. Custom fields allow you to customize your checkout experience by collecting specific information about your customers and their purchases.
   */
  customFields?: { [k: string]: string } | null | undefined;
  /**
   * Additional dynamic fields to pass to the Braintree API
   */
  dynamicDataFields?: BraintreeDynamicDataFieldsOptions | null | undefined;
};

/** @internal */
export const BraintreeOptions$inboundSchema: z.ZodType<
  BraintreeOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  discount_amount: z.nullable(z.number().int()).optional(),
  custom_fields: z.nullable(z.record(z.string())).optional(),
  dynamic_data_fields: z.nullable(
    BraintreeDynamicDataFieldsOptions$inboundSchema,
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "discount_amount": "discountAmount",
    "custom_fields": "customFields",
    "dynamic_data_fields": "dynamicDataFields",
  });
});

/** @internal */
export type BraintreeOptions$Outbound = {
  discount_amount?: number | null | undefined;
  custom_fields?: { [k: string]: string } | null | undefined;
  dynamic_data_fields?:
    | BraintreeDynamicDataFieldsOptions$Outbound
    | null
    | undefined;
};

/** @internal */
export const BraintreeOptions$outboundSchema: z.ZodType<
  BraintreeOptions$Outbound,
  z.ZodTypeDef,
  BraintreeOptions
> = z.object({
  discountAmount: z.nullable(z.number().int()).optional(),
  customFields: z.nullable(z.record(z.string())).optional(),
  dynamicDataFields: z.nullable(
    BraintreeDynamicDataFieldsOptions$outboundSchema,
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    discountAmount: "discount_amount",
    customFields: "custom_fields",
    dynamicDataFields: "dynamic_data_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BraintreeOptions$ {
  /** @deprecated use `BraintreeOptions$inboundSchema` instead. */
  export const inboundSchema = BraintreeOptions$inboundSchema;
  /** @deprecated use `BraintreeOptions$outboundSchema` instead. */
  export const outboundSchema = BraintreeOptions$outboundSchema;
  /** @deprecated use `BraintreeOptions$Outbound` instead. */
  export type Outbound = BraintreeOptions$Outbound;
}

export function braintreeOptionsToJSON(
  braintreeOptions: BraintreeOptions,
): string {
  return JSON.stringify(
    BraintreeOptions$outboundSchema.parse(braintreeOptions),
  );
}

export function braintreeOptionsFromJSON(
  jsonString: string,
): SafeParseResult<BraintreeOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BraintreeOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BraintreeOptions' from JSON`,
  );
}
