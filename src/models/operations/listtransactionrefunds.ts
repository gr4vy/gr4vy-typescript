/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListTransactionRefundsGlobals = {
  merchantAccountId?: string | undefined;
};

export type ListTransactionRefundsRequest = {
  /**
   * The ID of the transaction
   */
  transactionId: string;
  /**
   * The ID of the merchant account to use for this request.
   */
  merchantAccountId?: string | null | undefined;
};

/** @internal */
export const ListTransactionRefundsGlobals$inboundSchema: z.ZodType<
  ListTransactionRefundsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.string().optional(),
});

/** @internal */
export type ListTransactionRefundsGlobals$Outbound = {
  merchantAccountId?: string | undefined;
};

/** @internal */
export const ListTransactionRefundsGlobals$outboundSchema: z.ZodType<
  ListTransactionRefundsGlobals$Outbound,
  z.ZodTypeDef,
  ListTransactionRefundsGlobals
> = z.object({
  merchantAccountId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionRefundsGlobals$ {
  /** @deprecated use `ListTransactionRefundsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListTransactionRefundsGlobals$inboundSchema;
  /** @deprecated use `ListTransactionRefundsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListTransactionRefundsGlobals$outboundSchema;
  /** @deprecated use `ListTransactionRefundsGlobals$Outbound` instead. */
  export type Outbound = ListTransactionRefundsGlobals$Outbound;
}

export function listTransactionRefundsGlobalsToJSON(
  listTransactionRefundsGlobals: ListTransactionRefundsGlobals,
): string {
  return JSON.stringify(
    ListTransactionRefundsGlobals$outboundSchema.parse(
      listTransactionRefundsGlobals,
    ),
  );
}

export function listTransactionRefundsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListTransactionRefundsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransactionRefundsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransactionRefundsGlobals' from JSON`,
  );
}

/** @internal */
export const ListTransactionRefundsRequest$inboundSchema: z.ZodType<
  ListTransactionRefundsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  transaction_id: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "transaction_id": "transactionId",
  });
});

/** @internal */
export type ListTransactionRefundsRequest$Outbound = {
  transaction_id: string;
  merchantAccountId?: string | null | undefined;
};

/** @internal */
export const ListTransactionRefundsRequest$outboundSchema: z.ZodType<
  ListTransactionRefundsRequest$Outbound,
  z.ZodTypeDef,
  ListTransactionRefundsRequest
> = z.object({
  transactionId: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    transactionId: "transaction_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionRefundsRequest$ {
  /** @deprecated use `ListTransactionRefundsRequest$inboundSchema` instead. */
  export const inboundSchema = ListTransactionRefundsRequest$inboundSchema;
  /** @deprecated use `ListTransactionRefundsRequest$outboundSchema` instead. */
  export const outboundSchema = ListTransactionRefundsRequest$outboundSchema;
  /** @deprecated use `ListTransactionRefundsRequest$Outbound` instead. */
  export type Outbound = ListTransactionRefundsRequest$Outbound;
}

export function listTransactionRefundsRequestToJSON(
  listTransactionRefundsRequest: ListTransactionRefundsRequest,
): string {
  return JSON.stringify(
    ListTransactionRefundsRequest$outboundSchema.parse(
      listTransactionRefundsRequest,
    ),
  );
}

export function listTransactionRefundsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTransactionRefundsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransactionRefundsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransactionRefundsRequest' from JSON`,
  );
}
