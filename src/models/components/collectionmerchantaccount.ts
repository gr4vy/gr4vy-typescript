/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  MerchantAccount,
  MerchantAccount$inboundSchema,
  MerchantAccount$Outbound,
  MerchantAccount$outboundSchema,
} from "./merchantaccount.js";

export type CollectionMerchantAccount = {
  /**
   * A list of items returned for this request.
   */
  items: Array<MerchantAccount>;
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
export const CollectionMerchantAccount$inboundSchema: z.ZodType<
  CollectionMerchantAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(MerchantAccount$inboundSchema),
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
export type CollectionMerchantAccount$Outbound = {
  items: Array<MerchantAccount$Outbound>;
  limit: number;
  next_cursor?: string | null | undefined;
  previous_cursor?: string | null | undefined;
};

/** @internal */
export const CollectionMerchantAccount$outboundSchema: z.ZodType<
  CollectionMerchantAccount$Outbound,
  z.ZodTypeDef,
  CollectionMerchantAccount
> = z.object({
  items: z.array(MerchantAccount$outboundSchema),
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
export namespace CollectionMerchantAccount$ {
  /** @deprecated use `CollectionMerchantAccount$inboundSchema` instead. */
  export const inboundSchema = CollectionMerchantAccount$inboundSchema;
  /** @deprecated use `CollectionMerchantAccount$outboundSchema` instead. */
  export const outboundSchema = CollectionMerchantAccount$outboundSchema;
  /** @deprecated use `CollectionMerchantAccount$Outbound` instead. */
  export type Outbound = CollectionMerchantAccount$Outbound;
}

export function collectionMerchantAccountToJSON(
  collectionMerchantAccount: CollectionMerchantAccount,
): string {
  return JSON.stringify(
    CollectionMerchantAccount$outboundSchema.parse(collectionMerchantAccount),
  );
}

export function collectionMerchantAccountFromJSON(
  jsonString: string,
): SafeParseResult<CollectionMerchantAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CollectionMerchantAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CollectionMerchantAccount' from JSON`,
  );
}
