/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteGiftCardGlobals = {
  merchantAccountId?: string | undefined;
};

export type DeleteGiftCardRequest = {
  /**
   * The ID of the gift card.
   */
  giftCardId: string;
  /**
   * The ID of the merchant account to use for this request.
   */
  merchantAccountId?: string | null | undefined;
};

/** @internal */
export const DeleteGiftCardGlobals$inboundSchema: z.ZodType<
  DeleteGiftCardGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.string().optional(),
});

/** @internal */
export type DeleteGiftCardGlobals$Outbound = {
  merchantAccountId?: string | undefined;
};

/** @internal */
export const DeleteGiftCardGlobals$outboundSchema: z.ZodType<
  DeleteGiftCardGlobals$Outbound,
  z.ZodTypeDef,
  DeleteGiftCardGlobals
> = z.object({
  merchantAccountId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteGiftCardGlobals$ {
  /** @deprecated use `DeleteGiftCardGlobals$inboundSchema` instead. */
  export const inboundSchema = DeleteGiftCardGlobals$inboundSchema;
  /** @deprecated use `DeleteGiftCardGlobals$outboundSchema` instead. */
  export const outboundSchema = DeleteGiftCardGlobals$outboundSchema;
  /** @deprecated use `DeleteGiftCardGlobals$Outbound` instead. */
  export type Outbound = DeleteGiftCardGlobals$Outbound;
}

export function deleteGiftCardGlobalsToJSON(
  deleteGiftCardGlobals: DeleteGiftCardGlobals,
): string {
  return JSON.stringify(
    DeleteGiftCardGlobals$outboundSchema.parse(deleteGiftCardGlobals),
  );
}

export function deleteGiftCardGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<DeleteGiftCardGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteGiftCardGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteGiftCardGlobals' from JSON`,
  );
}

/** @internal */
export const DeleteGiftCardRequest$inboundSchema: z.ZodType<
  DeleteGiftCardRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  gift_card_id: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "gift_card_id": "giftCardId",
  });
});

/** @internal */
export type DeleteGiftCardRequest$Outbound = {
  gift_card_id: string;
  merchantAccountId?: string | null | undefined;
};

/** @internal */
export const DeleteGiftCardRequest$outboundSchema: z.ZodType<
  DeleteGiftCardRequest$Outbound,
  z.ZodTypeDef,
  DeleteGiftCardRequest
> = z.object({
  giftCardId: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    giftCardId: "gift_card_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteGiftCardRequest$ {
  /** @deprecated use `DeleteGiftCardRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteGiftCardRequest$inboundSchema;
  /** @deprecated use `DeleteGiftCardRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteGiftCardRequest$outboundSchema;
  /** @deprecated use `DeleteGiftCardRequest$Outbound` instead. */
  export type Outbound = DeleteGiftCardRequest$Outbound;
}

export function deleteGiftCardRequestToJSON(
  deleteGiftCardRequest: DeleteGiftCardRequest,
): string {
  return JSON.stringify(
    DeleteGiftCardRequest$outboundSchema.parse(deleteGiftCardRequest),
  );
}

export function deleteGiftCardRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteGiftCardRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteGiftCardRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteGiftCardRequest' from JSON`,
  );
}
