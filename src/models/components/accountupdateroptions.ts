/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountUpdaterOptions = {
  /**
   * The type of response to simulate.
   */
  responseCode?: "updated" | null | undefined;
  /**
   * When the `response_code` is set to `updated`, the payment method's account number will be updated to this value.
   */
  accountNumber?: string | null | undefined;
  /**
   * When the `response_code` is set to `updated`, the payment method's expiration month will be updated to this value.
   */
  expirationMonth?: string | null | undefined;
  /**
   * When the `response_code` is set to `updated`, the payment method's expiration year will be updated to this value.
   */
  expirationYear?: string | null | undefined;
  /**
   * The type of error code to simulate.
   */
  errorCode?: string | null | undefined;
};

/** @internal */
export const AccountUpdaterOptions$inboundSchema: z.ZodType<
  AccountUpdaterOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  response_code: z.nullable(z.literal("updated").default("updated")).optional(),
  account_number: z.nullable(z.string()).optional(),
  expiration_month: z.nullable(z.string()).optional(),
  expiration_year: z.nullable(z.string()).optional(),
  error_code: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "response_code": "responseCode",
    "account_number": "accountNumber",
    "expiration_month": "expirationMonth",
    "expiration_year": "expirationYear",
    "error_code": "errorCode",
  });
});

/** @internal */
export type AccountUpdaterOptions$Outbound = {
  response_code: "updated" | null;
  account_number?: string | null | undefined;
  expiration_month?: string | null | undefined;
  expiration_year?: string | null | undefined;
  error_code?: string | null | undefined;
};

/** @internal */
export const AccountUpdaterOptions$outboundSchema: z.ZodType<
  AccountUpdaterOptions$Outbound,
  z.ZodTypeDef,
  AccountUpdaterOptions
> = z.object({
  responseCode: z.nullable(z.literal("updated").default("updated" as const)),
  accountNumber: z.nullable(z.string()).optional(),
  expirationMonth: z.nullable(z.string()).optional(),
  expirationYear: z.nullable(z.string()).optional(),
  errorCode: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    responseCode: "response_code",
    accountNumber: "account_number",
    expirationMonth: "expiration_month",
    expirationYear: "expiration_year",
    errorCode: "error_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountUpdaterOptions$ {
  /** @deprecated use `AccountUpdaterOptions$inboundSchema` instead. */
  export const inboundSchema = AccountUpdaterOptions$inboundSchema;
  /** @deprecated use `AccountUpdaterOptions$outboundSchema` instead. */
  export const outboundSchema = AccountUpdaterOptions$outboundSchema;
  /** @deprecated use `AccountUpdaterOptions$Outbound` instead. */
  export type Outbound = AccountUpdaterOptions$Outbound;
}

export function accountUpdaterOptionsToJSON(
  accountUpdaterOptions: AccountUpdaterOptions,
): string {
  return JSON.stringify(
    AccountUpdaterOptions$outboundSchema.parse(accountUpdaterOptions),
  );
}

export function accountUpdaterOptionsFromJSON(
  jsonString: string,
): SafeParseResult<AccountUpdaterOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountUpdaterOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountUpdaterOptions' from JSON`,
  );
}
