/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A collection of checkout fields and the conditions under which they are required.
 */
export type RequiredCheckoutFields = {
  /**
   * A list of transaction fields that are required to process a payment for this service.
   */
  requiredFields: Array<string>;
  /**
   * The conditions under which these fields are required
   */
  conditions?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const RequiredCheckoutFields$inboundSchema: z.ZodType<
  RequiredCheckoutFields,
  z.ZodTypeDef,
  unknown
> = z.object({
  required_fields: z.array(z.string()),
  conditions: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "required_fields": "requiredFields",
  });
});

/** @internal */
export type RequiredCheckoutFields$Outbound = {
  required_fields: Array<string>;
  conditions?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const RequiredCheckoutFields$outboundSchema: z.ZodType<
  RequiredCheckoutFields$Outbound,
  z.ZodTypeDef,
  RequiredCheckoutFields
> = z.object({
  requiredFields: z.array(z.string()),
  conditions: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    requiredFields: "required_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequiredCheckoutFields$ {
  /** @deprecated use `RequiredCheckoutFields$inboundSchema` instead. */
  export const inboundSchema = RequiredCheckoutFields$inboundSchema;
  /** @deprecated use `RequiredCheckoutFields$outboundSchema` instead. */
  export const outboundSchema = RequiredCheckoutFields$outboundSchema;
  /** @deprecated use `RequiredCheckoutFields$Outbound` instead. */
  export type Outbound = RequiredCheckoutFields$Outbound;
}

export function requiredCheckoutFieldsToJSON(
  requiredCheckoutFields: RequiredCheckoutFields,
): string {
  return JSON.stringify(
    RequiredCheckoutFields$outboundSchema.parse(requiredCheckoutFields),
  );
}

export function requiredCheckoutFieldsFromJSON(
  jsonString: string,
): SafeParseResult<RequiredCheckoutFields, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequiredCheckoutFields$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequiredCheckoutFields' from JSON`,
  );
}
