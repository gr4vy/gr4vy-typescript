/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  GiftCardServiceProvider,
  GiftCardServiceProvider$inboundSchema,
  GiftCardServiceProvider$outboundSchema,
} from "./giftcardserviceprovider.js";

export type GiftCardService = {
  /**
   * Always `gift-card-service`.
   */
  type?: "gift-card-service" | undefined;
  /**
   * The ID for the gift card service.
   */
  id: string;
  giftCardServiceDefinitionId: GiftCardServiceProvider;
  /**
   * The display name for the gift card service.
   */
  displayName: string;
};

/** @internal */
export const GiftCardService$inboundSchema: z.ZodType<
  GiftCardService,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("gift-card-service").default("gift-card-service"),
  id: z.string(),
  gift_card_service_definition_id: GiftCardServiceProvider$inboundSchema,
  display_name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "gift_card_service_definition_id": "giftCardServiceDefinitionId",
    "display_name": "displayName",
  });
});

/** @internal */
export type GiftCardService$Outbound = {
  type: "gift-card-service";
  id: string;
  gift_card_service_definition_id: string;
  display_name: string;
};

/** @internal */
export const GiftCardService$outboundSchema: z.ZodType<
  GiftCardService$Outbound,
  z.ZodTypeDef,
  GiftCardService
> = z.object({
  type: z.literal("gift-card-service").default("gift-card-service" as const),
  id: z.string(),
  giftCardServiceDefinitionId: GiftCardServiceProvider$outboundSchema,
  displayName: z.string(),
}).transform((v) => {
  return remap$(v, {
    giftCardServiceDefinitionId: "gift_card_service_definition_id",
    displayName: "display_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GiftCardService$ {
  /** @deprecated use `GiftCardService$inboundSchema` instead. */
  export const inboundSchema = GiftCardService$inboundSchema;
  /** @deprecated use `GiftCardService$outboundSchema` instead. */
  export const outboundSchema = GiftCardService$outboundSchema;
  /** @deprecated use `GiftCardService$Outbound` instead. */
  export type Outbound = GiftCardService$Outbound;
}

export function giftCardServiceToJSON(
  giftCardService: GiftCardService,
): string {
  return JSON.stringify(GiftCardService$outboundSchema.parse(giftCardService));
}

export function giftCardServiceFromJSON(
  jsonString: string,
): SafeParseResult<GiftCardService, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GiftCardService$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GiftCardService' from JSON`,
  );
}
