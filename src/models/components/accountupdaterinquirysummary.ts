/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountUpdaterInquirySummary = {
  /**
   * Always `account-updater-inquiry`
   */
  type?: "account-updater-inquiry" | undefined;
  /**
   * The ID for the account updater inquiry.
   */
  id: string;
  /**
   * The ID of the payment method
   */
  paymentMethodId: string;
};

/** @internal */
export const AccountUpdaterInquirySummary$inboundSchema: z.ZodType<
  AccountUpdaterInquirySummary,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("account-updater-inquiry").default("account-updater-inquiry"),
  id: z.string(),
  payment_method_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "payment_method_id": "paymentMethodId",
  });
});

/** @internal */
export type AccountUpdaterInquirySummary$Outbound = {
  type: "account-updater-inquiry";
  id: string;
  payment_method_id: string;
};

/** @internal */
export const AccountUpdaterInquirySummary$outboundSchema: z.ZodType<
  AccountUpdaterInquirySummary$Outbound,
  z.ZodTypeDef,
  AccountUpdaterInquirySummary
> = z.object({
  type: z.literal("account-updater-inquiry").default(
    "account-updater-inquiry" as const,
  ),
  id: z.string(),
  paymentMethodId: z.string(),
}).transform((v) => {
  return remap$(v, {
    paymentMethodId: "payment_method_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountUpdaterInquirySummary$ {
  /** @deprecated use `AccountUpdaterInquirySummary$inboundSchema` instead. */
  export const inboundSchema = AccountUpdaterInquirySummary$inboundSchema;
  /** @deprecated use `AccountUpdaterInquirySummary$outboundSchema` instead. */
  export const outboundSchema = AccountUpdaterInquirySummary$outboundSchema;
  /** @deprecated use `AccountUpdaterInquirySummary$Outbound` instead. */
  export type Outbound = AccountUpdaterInquirySummary$Outbound;
}

export function accountUpdaterInquirySummaryToJSON(
  accountUpdaterInquirySummary: AccountUpdaterInquirySummary,
): string {
  return JSON.stringify(
    AccountUpdaterInquirySummary$outboundSchema.parse(
      accountUpdaterInquirySummary,
    ),
  );
}

export function accountUpdaterInquirySummaryFromJSON(
  jsonString: string,
): SafeParseResult<AccountUpdaterInquirySummary, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountUpdaterInquirySummary$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountUpdaterInquirySummary' from JSON`,
  );
}
