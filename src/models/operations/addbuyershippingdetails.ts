/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AddBuyerShippingDetailsGlobals = {
  merchantAccountId?: string | undefined;
};

export type AddBuyerShippingDetailsRequest = {
  /**
   * The ID of the buyer to add shipping details to.
   */
  buyerId: string;
  /**
   * The ID of the merchant account to use for this request.
   */
  merchantAccountId?: string | null | undefined;
  shippingDetailsCreate: components.ShippingDetailsCreate;
};

/** @internal */
export const AddBuyerShippingDetailsGlobals$inboundSchema: z.ZodType<
  AddBuyerShippingDetailsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.string().optional(),
});

/** @internal */
export type AddBuyerShippingDetailsGlobals$Outbound = {
  merchantAccountId?: string | undefined;
};

/** @internal */
export const AddBuyerShippingDetailsGlobals$outboundSchema: z.ZodType<
  AddBuyerShippingDetailsGlobals$Outbound,
  z.ZodTypeDef,
  AddBuyerShippingDetailsGlobals
> = z.object({
  merchantAccountId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBuyerShippingDetailsGlobals$ {
  /** @deprecated use `AddBuyerShippingDetailsGlobals$inboundSchema` instead. */
  export const inboundSchema = AddBuyerShippingDetailsGlobals$inboundSchema;
  /** @deprecated use `AddBuyerShippingDetailsGlobals$outboundSchema` instead. */
  export const outboundSchema = AddBuyerShippingDetailsGlobals$outboundSchema;
  /** @deprecated use `AddBuyerShippingDetailsGlobals$Outbound` instead. */
  export type Outbound = AddBuyerShippingDetailsGlobals$Outbound;
}

export function addBuyerShippingDetailsGlobalsToJSON(
  addBuyerShippingDetailsGlobals: AddBuyerShippingDetailsGlobals,
): string {
  return JSON.stringify(
    AddBuyerShippingDetailsGlobals$outboundSchema.parse(
      addBuyerShippingDetailsGlobals,
    ),
  );
}

export function addBuyerShippingDetailsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AddBuyerShippingDetailsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddBuyerShippingDetailsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddBuyerShippingDetailsGlobals' from JSON`,
  );
}

/** @internal */
export const AddBuyerShippingDetailsRequest$inboundSchema: z.ZodType<
  AddBuyerShippingDetailsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  buyer_id: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
  ShippingDetailsCreate: components.ShippingDetailsCreate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "buyer_id": "buyerId",
    "ShippingDetailsCreate": "shippingDetailsCreate",
  });
});

/** @internal */
export type AddBuyerShippingDetailsRequest$Outbound = {
  buyer_id: string;
  merchantAccountId?: string | null | undefined;
  ShippingDetailsCreate: components.ShippingDetailsCreate$Outbound;
};

/** @internal */
export const AddBuyerShippingDetailsRequest$outboundSchema: z.ZodType<
  AddBuyerShippingDetailsRequest$Outbound,
  z.ZodTypeDef,
  AddBuyerShippingDetailsRequest
> = z.object({
  buyerId: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
  shippingDetailsCreate: components.ShippingDetailsCreate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    buyerId: "buyer_id",
    shippingDetailsCreate: "ShippingDetailsCreate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddBuyerShippingDetailsRequest$ {
  /** @deprecated use `AddBuyerShippingDetailsRequest$inboundSchema` instead. */
  export const inboundSchema = AddBuyerShippingDetailsRequest$inboundSchema;
  /** @deprecated use `AddBuyerShippingDetailsRequest$outboundSchema` instead. */
  export const outboundSchema = AddBuyerShippingDetailsRequest$outboundSchema;
  /** @deprecated use `AddBuyerShippingDetailsRequest$Outbound` instead. */
  export type Outbound = AddBuyerShippingDetailsRequest$Outbound;
}

export function addBuyerShippingDetailsRequestToJSON(
  addBuyerShippingDetailsRequest: AddBuyerShippingDetailsRequest,
): string {
  return JSON.stringify(
    AddBuyerShippingDetailsRequest$outboundSchema.parse(
      addBuyerShippingDetailsRequest,
    ),
  );
}

export function addBuyerShippingDetailsRequestFromJSON(
  jsonString: string,
): SafeParseResult<AddBuyerShippingDetailsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddBuyerShippingDetailsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddBuyerShippingDetailsRequest' from JSON`,
  );
}
