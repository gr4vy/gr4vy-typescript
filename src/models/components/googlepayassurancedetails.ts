/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The assurance details provided by Google Pay
 */
export type GooglePayAssuranceDetails = {
  /**
   * Defines if an account was verified.
   */
  accountVerified?: boolean | null | undefined;
  /**
   * Defines if the card holder was authenticated.
   */
  cardHolderAuthenticated?: boolean | null | undefined;
};

/** @internal */
export const GooglePayAssuranceDetails$inboundSchema: z.ZodType<
  GooglePayAssuranceDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_verified: z.nullable(z.boolean()).optional(),
  card_holder_authenticated: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "account_verified": "accountVerified",
    "card_holder_authenticated": "cardHolderAuthenticated",
  });
});

/** @internal */
export type GooglePayAssuranceDetails$Outbound = {
  account_verified?: boolean | null | undefined;
  card_holder_authenticated?: boolean | null | undefined;
};

/** @internal */
export const GooglePayAssuranceDetails$outboundSchema: z.ZodType<
  GooglePayAssuranceDetails$Outbound,
  z.ZodTypeDef,
  GooglePayAssuranceDetails
> = z.object({
  accountVerified: z.nullable(z.boolean()).optional(),
  cardHolderAuthenticated: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    accountVerified: "account_verified",
    cardHolderAuthenticated: "card_holder_authenticated",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GooglePayAssuranceDetails$ {
  /** @deprecated use `GooglePayAssuranceDetails$inboundSchema` instead. */
  export const inboundSchema = GooglePayAssuranceDetails$inboundSchema;
  /** @deprecated use `GooglePayAssuranceDetails$outboundSchema` instead. */
  export const outboundSchema = GooglePayAssuranceDetails$outboundSchema;
  /** @deprecated use `GooglePayAssuranceDetails$Outbound` instead. */
  export type Outbound = GooglePayAssuranceDetails$Outbound;
}

export function googlePayAssuranceDetailsToJSON(
  googlePayAssuranceDetails: GooglePayAssuranceDetails,
): string {
  return JSON.stringify(
    GooglePayAssuranceDetails$outboundSchema.parse(googlePayAssuranceDetails),
  );
}

export function googlePayAssuranceDetailsFromJSON(
  jsonString: string,
): SafeParseResult<GooglePayAssuranceDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GooglePayAssuranceDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GooglePayAssuranceDetails' from JSON`,
  );
}
