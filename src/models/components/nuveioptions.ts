/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  NuveiAirlineDataOptions,
  NuveiAirlineDataOptions$inboundSchema,
  NuveiAirlineDataOptions$Outbound,
  NuveiAirlineDataOptions$outboundSchema,
} from "./nuveiairlinedataoptions.js";

export type NuveiOptions = {
  /**
   * General data about the customer provided by the merchant.
   */
  customData?: string | null | undefined;
  /**
   * Provides additional airline data for Nuvei payments.
   */
  airlineData?: NuveiAirlineDataOptions | null | undefined;
};

/** @internal */
export const NuveiOptions$inboundSchema: z.ZodType<
  NuveiOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  customData: z.nullable(z.string()).optional(),
  airlineData: z.nullable(NuveiAirlineDataOptions$inboundSchema).optional(),
});

/** @internal */
export type NuveiOptions$Outbound = {
  customData?: string | null | undefined;
  airlineData?: NuveiAirlineDataOptions$Outbound | null | undefined;
};

/** @internal */
export const NuveiOptions$outboundSchema: z.ZodType<
  NuveiOptions$Outbound,
  z.ZodTypeDef,
  NuveiOptions
> = z.object({
  customData: z.nullable(z.string()).optional(),
  airlineData: z.nullable(NuveiAirlineDataOptions$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NuveiOptions$ {
  /** @deprecated use `NuveiOptions$inboundSchema` instead. */
  export const inboundSchema = NuveiOptions$inboundSchema;
  /** @deprecated use `NuveiOptions$outboundSchema` instead. */
  export const outboundSchema = NuveiOptions$outboundSchema;
  /** @deprecated use `NuveiOptions$Outbound` instead. */
  export type Outbound = NuveiOptions$Outbound;
}

export function nuveiOptionsToJSON(nuveiOptions: NuveiOptions): string {
  return JSON.stringify(NuveiOptions$outboundSchema.parse(nuveiOptions));
}

export function nuveiOptionsFromJSON(
  jsonString: string,
): SafeParseResult<NuveiOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NuveiOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NuveiOptions' from JSON`,
  );
}
