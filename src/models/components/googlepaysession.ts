/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GooglePaySession = {
  /**
   * The gateway ID for the merchant as assigned by our platform.
   */
  gatewayMerchantId: string;
  /**
   * The session token for Google Pay.
   */
  token: string;
};

/** @internal */
export const GooglePaySession$inboundSchema: z.ZodType<
  GooglePaySession,
  z.ZodTypeDef,
  unknown
> = z.object({
  gateway_merchant_id: z.string(),
  token: z.string(),
}).transform((v) => {
  return remap$(v, {
    "gateway_merchant_id": "gatewayMerchantId",
  });
});

/** @internal */
export type GooglePaySession$Outbound = {
  gateway_merchant_id: string;
  token: string;
};

/** @internal */
export const GooglePaySession$outboundSchema: z.ZodType<
  GooglePaySession$Outbound,
  z.ZodTypeDef,
  GooglePaySession
> = z.object({
  gatewayMerchantId: z.string(),
  token: z.string(),
}).transform((v) => {
  return remap$(v, {
    gatewayMerchantId: "gateway_merchant_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GooglePaySession$ {
  /** @deprecated use `GooglePaySession$inboundSchema` instead. */
  export const inboundSchema = GooglePaySession$inboundSchema;
  /** @deprecated use `GooglePaySession$outboundSchema` instead. */
  export const outboundSchema = GooglePaySession$outboundSchema;
  /** @deprecated use `GooglePaySession$Outbound` instead. */
  export type Outbound = GooglePaySession$Outbound;
}

export function googlePaySessionToJSON(
  googlePaySession: GooglePaySession,
): string {
  return JSON.stringify(
    GooglePaySession$outboundSchema.parse(googlePaySession),
  );
}

export function googlePaySessionFromJSON(
  jsonString: string,
): SafeParseResult<GooglePaySession, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GooglePaySession$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GooglePaySession' from JSON`,
  );
}
