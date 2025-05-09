/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaymentMethod,
  PaymentMethod$inboundSchema,
  PaymentMethod$Outbound,
  PaymentMethod$outboundSchema,
} from "./paymentmethod.js";

export type CollectionPaymentMethod = {
  /**
   * A list of items returned for this request.
   */
  items: Array<PaymentMethod>;
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
export const CollectionPaymentMethod$inboundSchema: z.ZodType<
  CollectionPaymentMethod,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(PaymentMethod$inboundSchema),
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
export type CollectionPaymentMethod$Outbound = {
  items: Array<PaymentMethod$Outbound>;
  limit: number;
  next_cursor?: string | null | undefined;
  previous_cursor?: string | null | undefined;
};

/** @internal */
export const CollectionPaymentMethod$outboundSchema: z.ZodType<
  CollectionPaymentMethod$Outbound,
  z.ZodTypeDef,
  CollectionPaymentMethod
> = z.object({
  items: z.array(PaymentMethod$outboundSchema),
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
export namespace CollectionPaymentMethod$ {
  /** @deprecated use `CollectionPaymentMethod$inboundSchema` instead. */
  export const inboundSchema = CollectionPaymentMethod$inboundSchema;
  /** @deprecated use `CollectionPaymentMethod$outboundSchema` instead. */
  export const outboundSchema = CollectionPaymentMethod$outboundSchema;
  /** @deprecated use `CollectionPaymentMethod$Outbound` instead. */
  export type Outbound = CollectionPaymentMethod$Outbound;
}

export function collectionPaymentMethodToJSON(
  collectionPaymentMethod: CollectionPaymentMethod,
): string {
  return JSON.stringify(
    CollectionPaymentMethod$outboundSchema.parse(collectionPaymentMethod),
  );
}

export function collectionPaymentMethodFromJSON(
  jsonString: string,
): SafeParseResult<CollectionPaymentMethod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CollectionPaymentMethod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CollectionPaymentMethod' from JSON`,
  );
}
