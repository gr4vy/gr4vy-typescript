/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Refund,
  Refund$inboundSchema,
  Refund$Outbound,
  Refund$outboundSchema,
} from "./refund.js";

export type CollectionRefund = {
  /**
   * A list of items returned for this request.
   */
  items: Array<Refund>;
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
export const CollectionRefund$inboundSchema: z.ZodType<
  CollectionRefund,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(Refund$inboundSchema),
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
export type CollectionRefund$Outbound = {
  items: Array<Refund$Outbound>;
  limit: number;
  next_cursor?: string | null | undefined;
  previous_cursor?: string | null | undefined;
};

/** @internal */
export const CollectionRefund$outboundSchema: z.ZodType<
  CollectionRefund$Outbound,
  z.ZodTypeDef,
  CollectionRefund
> = z.object({
  items: z.array(Refund$outboundSchema),
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
export namespace CollectionRefund$ {
  /** @deprecated use `CollectionRefund$inboundSchema` instead. */
  export const inboundSchema = CollectionRefund$inboundSchema;
  /** @deprecated use `CollectionRefund$outboundSchema` instead. */
  export const outboundSchema = CollectionRefund$outboundSchema;
  /** @deprecated use `CollectionRefund$Outbound` instead. */
  export type Outbound = CollectionRefund$Outbound;
}

export function collectionRefundToJSON(
  collectionRefund: CollectionRefund,
): string {
  return JSON.stringify(
    CollectionRefund$outboundSchema.parse(collectionRefund),
  );
}

export function collectionRefundFromJSON(
  jsonString: string,
): SafeParseResult<CollectionRefund, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CollectionRefund$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CollectionRefund' from JSON`,
  );
}
