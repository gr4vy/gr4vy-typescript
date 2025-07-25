/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListBuyerGiftCardsGlobals = {
  merchantAccountId?: string | undefined;
};

export type ListBuyerGiftCardsRequest = {
  buyerExternalIdentifier?: string | null | undefined;
  buyerId?: string | null | undefined;
  /**
   * The ID of the merchant account to use for this request.
   */
  merchantAccountId?: string | null | undefined;
};

/** @internal */
export const ListBuyerGiftCardsGlobals$inboundSchema: z.ZodType<
  ListBuyerGiftCardsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.string().optional(),
});

/** @internal */
export type ListBuyerGiftCardsGlobals$Outbound = {
  merchantAccountId?: string | undefined;
};

/** @internal */
export const ListBuyerGiftCardsGlobals$outboundSchema: z.ZodType<
  ListBuyerGiftCardsGlobals$Outbound,
  z.ZodTypeDef,
  ListBuyerGiftCardsGlobals
> = z.object({
  merchantAccountId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBuyerGiftCardsGlobals$ {
  /** @deprecated use `ListBuyerGiftCardsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListBuyerGiftCardsGlobals$inboundSchema;
  /** @deprecated use `ListBuyerGiftCardsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListBuyerGiftCardsGlobals$outboundSchema;
  /** @deprecated use `ListBuyerGiftCardsGlobals$Outbound` instead. */
  export type Outbound = ListBuyerGiftCardsGlobals$Outbound;
}

export function listBuyerGiftCardsGlobalsToJSON(
  listBuyerGiftCardsGlobals: ListBuyerGiftCardsGlobals,
): string {
  return JSON.stringify(
    ListBuyerGiftCardsGlobals$outboundSchema.parse(listBuyerGiftCardsGlobals),
  );
}

export function listBuyerGiftCardsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListBuyerGiftCardsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListBuyerGiftCardsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListBuyerGiftCardsGlobals' from JSON`,
  );
}

/** @internal */
export const ListBuyerGiftCardsRequest$inboundSchema: z.ZodType<
  ListBuyerGiftCardsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  buyer_external_identifier: z.nullable(z.string()).optional(),
  buyer_id: z.nullable(z.string()).optional(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "buyer_external_identifier": "buyerExternalIdentifier",
    "buyer_id": "buyerId",
  });
});

/** @internal */
export type ListBuyerGiftCardsRequest$Outbound = {
  buyer_external_identifier?: string | null | undefined;
  buyer_id?: string | null | undefined;
  merchantAccountId?: string | null | undefined;
};

/** @internal */
export const ListBuyerGiftCardsRequest$outboundSchema: z.ZodType<
  ListBuyerGiftCardsRequest$Outbound,
  z.ZodTypeDef,
  ListBuyerGiftCardsRequest
> = z.object({
  buyerExternalIdentifier: z.nullable(z.string()).optional(),
  buyerId: z.nullable(z.string()).optional(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    buyerExternalIdentifier: "buyer_external_identifier",
    buyerId: "buyer_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBuyerGiftCardsRequest$ {
  /** @deprecated use `ListBuyerGiftCardsRequest$inboundSchema` instead. */
  export const inboundSchema = ListBuyerGiftCardsRequest$inboundSchema;
  /** @deprecated use `ListBuyerGiftCardsRequest$outboundSchema` instead. */
  export const outboundSchema = ListBuyerGiftCardsRequest$outboundSchema;
  /** @deprecated use `ListBuyerGiftCardsRequest$Outbound` instead. */
  export type Outbound = ListBuyerGiftCardsRequest$Outbound;
}

export function listBuyerGiftCardsRequestToJSON(
  listBuyerGiftCardsRequest: ListBuyerGiftCardsRequest,
): string {
  return JSON.stringify(
    ListBuyerGiftCardsRequest$outboundSchema.parse(listBuyerGiftCardsRequest),
  );
}

export function listBuyerGiftCardsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListBuyerGiftCardsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListBuyerGiftCardsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListBuyerGiftCardsRequest' from JSON`,
  );
}
