/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Request body for editing a registered digital wallet
 */
export type DigitalWalletUpdate = {
  merchantName?: string | null | undefined;
  domainNames?: Array<string> | null | undefined;
  merchantDisplayName?: string | null | undefined;
  merchantUrl?: string | null | undefined;
  merchantCountryCode?: string | null | undefined;
};

/** @internal */
export const DigitalWalletUpdate$inboundSchema: z.ZodType<
  DigitalWalletUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchant_name: z.nullable(z.string()).optional(),
  domain_names: z.nullable(z.array(z.string())).optional(),
  merchant_display_name: z.nullable(z.string()).optional(),
  merchant_url: z.nullable(z.string()).optional(),
  merchant_country_code: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "merchant_name": "merchantName",
    "domain_names": "domainNames",
    "merchant_display_name": "merchantDisplayName",
    "merchant_url": "merchantUrl",
    "merchant_country_code": "merchantCountryCode",
  });
});

/** @internal */
export type DigitalWalletUpdate$Outbound = {
  merchant_name?: string | null | undefined;
  domain_names?: Array<string> | null | undefined;
  merchant_display_name?: string | null | undefined;
  merchant_url?: string | null | undefined;
  merchant_country_code?: string | null | undefined;
};

/** @internal */
export const DigitalWalletUpdate$outboundSchema: z.ZodType<
  DigitalWalletUpdate$Outbound,
  z.ZodTypeDef,
  DigitalWalletUpdate
> = z.object({
  merchantName: z.nullable(z.string()).optional(),
  domainNames: z.nullable(z.array(z.string())).optional(),
  merchantDisplayName: z.nullable(z.string()).optional(),
  merchantUrl: z.nullable(z.string()).optional(),
  merchantCountryCode: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    merchantName: "merchant_name",
    domainNames: "domain_names",
    merchantDisplayName: "merchant_display_name",
    merchantUrl: "merchant_url",
    merchantCountryCode: "merchant_country_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DigitalWalletUpdate$ {
  /** @deprecated use `DigitalWalletUpdate$inboundSchema` instead. */
  export const inboundSchema = DigitalWalletUpdate$inboundSchema;
  /** @deprecated use `DigitalWalletUpdate$outboundSchema` instead. */
  export const outboundSchema = DigitalWalletUpdate$outboundSchema;
  /** @deprecated use `DigitalWalletUpdate$Outbound` instead. */
  export type Outbound = DigitalWalletUpdate$Outbound;
}

export function digitalWalletUpdateToJSON(
  digitalWalletUpdate: DigitalWalletUpdate,
): string {
  return JSON.stringify(
    DigitalWalletUpdate$outboundSchema.parse(digitalWalletUpdate),
  );
}

export function digitalWalletUpdateFromJSON(
  jsonString: string,
): SafeParseResult<DigitalWalletUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DigitalWalletUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DigitalWalletUpdate' from JSON`,
  );
}
