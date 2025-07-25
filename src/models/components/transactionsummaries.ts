/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TransactionSummary,
  TransactionSummary$inboundSchema,
  TransactionSummary$Outbound,
  TransactionSummary$outboundSchema,
} from "./transactionsummary.js";

export type TransactionSummaries = {
  /**
   * A list of items returned for this request.
   */
  items: Array<TransactionSummary>;
  /**
   * The number of items for this page.
   */
  limit?: number | undefined;
  /**
   * The cursor pointing at the next page of items.
   */
  nextCursor?: string | null | undefined;
  /**
   * The cursor pointing at the previous page of items.
   */
  previousCursor?: string | null | undefined;
};

/** @internal */
export const TransactionSummaries$inboundSchema: z.ZodType<
  TransactionSummaries,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(TransactionSummary$inboundSchema),
  limit: z.number().int().default(20),
  next_cursor: z.nullable(z.string()).optional(),
  previous_cursor: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_cursor": "nextCursor",
    "previous_cursor": "previousCursor",
  });
});

/** @internal */
export type TransactionSummaries$Outbound = {
  items: Array<TransactionSummary$Outbound>;
  limit: number;
  next_cursor?: string | null | undefined;
  previous_cursor?: string | null | undefined;
};

/** @internal */
export const TransactionSummaries$outboundSchema: z.ZodType<
  TransactionSummaries$Outbound,
  z.ZodTypeDef,
  TransactionSummaries
> = z.object({
  items: z.array(TransactionSummary$outboundSchema),
  limit: z.number().int().default(20),
  nextCursor: z.nullable(z.string()).optional(),
  previousCursor: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    nextCursor: "next_cursor",
    previousCursor: "previous_cursor",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionSummaries$ {
  /** @deprecated use `TransactionSummaries$inboundSchema` instead. */
  export const inboundSchema = TransactionSummaries$inboundSchema;
  /** @deprecated use `TransactionSummaries$outboundSchema` instead. */
  export const outboundSchema = TransactionSummaries$outboundSchema;
  /** @deprecated use `TransactionSummaries$Outbound` instead. */
  export type Outbound = TransactionSummaries$Outbound;
}

export function transactionSummariesToJSON(
  transactionSummaries: TransactionSummaries,
): string {
  return JSON.stringify(
    TransactionSummaries$outboundSchema.parse(transactionSummaries),
  );
}

export function transactionSummariesFromJSON(
  jsonString: string,
): SafeParseResult<TransactionSummaries, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransactionSummaries$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransactionSummaries' from JSON`,
  );
}
