/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type MockCardMerchantAdviceCodeOptions = {
  /**
   * The MAC to return for this request.
   */
  result?: string | null | undefined;
  /**
   * When set, the MAC is only returned if the card number matches this account number.
   */
  accountNumber: string | null;
};

/** @internal */
export const MockCardMerchantAdviceCodeOptions$inboundSchema: z.ZodType<
  MockCardMerchantAdviceCodeOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  result: z.nullable(z.string()).optional(),
  account_number: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "account_number": "accountNumber",
  });
});

/** @internal */
export type MockCardMerchantAdviceCodeOptions$Outbound = {
  result?: string | null | undefined;
  account_number: string | null;
};

/** @internal */
export const MockCardMerchantAdviceCodeOptions$outboundSchema: z.ZodType<
  MockCardMerchantAdviceCodeOptions$Outbound,
  z.ZodTypeDef,
  MockCardMerchantAdviceCodeOptions
> = z.object({
  result: z.nullable(z.string()).optional(),
  accountNumber: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    accountNumber: "account_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MockCardMerchantAdviceCodeOptions$ {
  /** @deprecated use `MockCardMerchantAdviceCodeOptions$inboundSchema` instead. */
  export const inboundSchema = MockCardMerchantAdviceCodeOptions$inboundSchema;
  /** @deprecated use `MockCardMerchantAdviceCodeOptions$outboundSchema` instead. */
  export const outboundSchema =
    MockCardMerchantAdviceCodeOptions$outboundSchema;
  /** @deprecated use `MockCardMerchantAdviceCodeOptions$Outbound` instead. */
  export type Outbound = MockCardMerchantAdviceCodeOptions$Outbound;
}

export function mockCardMerchantAdviceCodeOptionsToJSON(
  mockCardMerchantAdviceCodeOptions: MockCardMerchantAdviceCodeOptions,
): string {
  return JSON.stringify(
    MockCardMerchantAdviceCodeOptions$outboundSchema.parse(
      mockCardMerchantAdviceCodeOptions,
    ),
  );
}

export function mockCardMerchantAdviceCodeOptionsFromJSON(
  jsonString: string,
): SafeParseResult<MockCardMerchantAdviceCodeOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MockCardMerchantAdviceCodeOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MockCardMerchantAdviceCodeOptions' from JSON`,
  );
}
