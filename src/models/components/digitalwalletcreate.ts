/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DigitalWalletProvider,
  DigitalWalletProvider$inboundSchema,
  DigitalWalletProvider$outboundSchema,
} from "./digitalwalletprovider.js";

/**
 * Request body for registering a new digital wallet
 */
export type DigitalWalletCreate = {
  provider: DigitalWalletProvider;
  merchantName: string;
  merchantDisplayName?: string | null | undefined;
  merchantUrl?: string | null | undefined;
  merchantCountryCode?: string | null | undefined;
  domainNames?: Array<string> | undefined;
  acceptTermsAndConditions: boolean;
};

/** @internal */
export const DigitalWalletCreate$inboundSchema: z.ZodType<
  DigitalWalletCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  provider: DigitalWalletProvider$inboundSchema,
  merchant_name: z.string(),
  merchant_display_name: z.nullable(z.string()).optional(),
  merchant_url: z.nullable(z.string()).optional(),
  merchant_country_code: z.nullable(z.string()).optional(),
  domain_names: z.array(z.string()).optional(),
  accept_terms_and_conditions: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "merchant_name": "merchantName",
    "merchant_display_name": "merchantDisplayName",
    "merchant_url": "merchantUrl",
    "merchant_country_code": "merchantCountryCode",
    "domain_names": "domainNames",
    "accept_terms_and_conditions": "acceptTermsAndConditions",
  });
});

/** @internal */
export type DigitalWalletCreate$Outbound = {
  provider: string;
  merchant_name: string;
  merchant_display_name?: string | null | undefined;
  merchant_url?: string | null | undefined;
  merchant_country_code?: string | null | undefined;
  domain_names?: Array<string> | undefined;
  accept_terms_and_conditions: boolean;
};

/** @internal */
export const DigitalWalletCreate$outboundSchema: z.ZodType<
  DigitalWalletCreate$Outbound,
  z.ZodTypeDef,
  DigitalWalletCreate
> = z.object({
  provider: DigitalWalletProvider$outboundSchema,
  merchantName: z.string(),
  merchantDisplayName: z.nullable(z.string()).optional(),
  merchantUrl: z.nullable(z.string()).optional(),
  merchantCountryCode: z.nullable(z.string()).optional(),
  domainNames: z.array(z.string()).optional(),
  acceptTermsAndConditions: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    merchantName: "merchant_name",
    merchantDisplayName: "merchant_display_name",
    merchantUrl: "merchant_url",
    merchantCountryCode: "merchant_country_code",
    domainNames: "domain_names",
    acceptTermsAndConditions: "accept_terms_and_conditions",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DigitalWalletCreate$ {
  /** @deprecated use `DigitalWalletCreate$inboundSchema` instead. */
  export const inboundSchema = DigitalWalletCreate$inboundSchema;
  /** @deprecated use `DigitalWalletCreate$outboundSchema` instead. */
  export const outboundSchema = DigitalWalletCreate$outboundSchema;
  /** @deprecated use `DigitalWalletCreate$Outbound` instead. */
  export type Outbound = DigitalWalletCreate$Outbound;
}

export function digitalWalletCreateToJSON(
  digitalWalletCreate: DigitalWalletCreate,
): string {
  return JSON.stringify(
    DigitalWalletCreate$outboundSchema.parse(digitalWalletCreate),
  );
}

export function digitalWalletCreateFromJSON(
  jsonString: string,
): SafeParseResult<DigitalWalletCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DigitalWalletCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DigitalWalletCreate' from JSON`,
  );
}
