/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListPaymentOptionsGlobals = {
  merchantAccountId?: string | undefined;
};

export type ListPaymentOptionsRequest = {
  /**
   * The ID of the merchant account to use for this request.
   */
  merchantAccountId?: string | null | undefined;
  paymentOptionRequest: components.PaymentOptionRequest;
};

/** @internal */
export const ListPaymentOptionsGlobals$inboundSchema: z.ZodType<
  ListPaymentOptionsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.string().optional(),
});

/** @internal */
export type ListPaymentOptionsGlobals$Outbound = {
  merchantAccountId?: string | undefined;
};

/** @internal */
export const ListPaymentOptionsGlobals$outboundSchema: z.ZodType<
  ListPaymentOptionsGlobals$Outbound,
  z.ZodTypeDef,
  ListPaymentOptionsGlobals
> = z.object({
  merchantAccountId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPaymentOptionsGlobals$ {
  /** @deprecated use `ListPaymentOptionsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListPaymentOptionsGlobals$inboundSchema;
  /** @deprecated use `ListPaymentOptionsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListPaymentOptionsGlobals$outboundSchema;
  /** @deprecated use `ListPaymentOptionsGlobals$Outbound` instead. */
  export type Outbound = ListPaymentOptionsGlobals$Outbound;
}

export function listPaymentOptionsGlobalsToJSON(
  listPaymentOptionsGlobals: ListPaymentOptionsGlobals,
): string {
  return JSON.stringify(
    ListPaymentOptionsGlobals$outboundSchema.parse(listPaymentOptionsGlobals),
  );
}

export function listPaymentOptionsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListPaymentOptionsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPaymentOptionsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPaymentOptionsGlobals' from JSON`,
  );
}

/** @internal */
export const ListPaymentOptionsRequest$inboundSchema: z.ZodType<
  ListPaymentOptionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.nullable(z.string()).optional(),
  PaymentOptionRequest: components.PaymentOptionRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "PaymentOptionRequest": "paymentOptionRequest",
  });
});

/** @internal */
export type ListPaymentOptionsRequest$Outbound = {
  merchantAccountId?: string | null | undefined;
  PaymentOptionRequest: components.PaymentOptionRequest$Outbound;
};

/** @internal */
export const ListPaymentOptionsRequest$outboundSchema: z.ZodType<
  ListPaymentOptionsRequest$Outbound,
  z.ZodTypeDef,
  ListPaymentOptionsRequest
> = z.object({
  merchantAccountId: z.nullable(z.string()).optional(),
  paymentOptionRequest: components.PaymentOptionRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    paymentOptionRequest: "PaymentOptionRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPaymentOptionsRequest$ {
  /** @deprecated use `ListPaymentOptionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListPaymentOptionsRequest$inboundSchema;
  /** @deprecated use `ListPaymentOptionsRequest$outboundSchema` instead. */
  export const outboundSchema = ListPaymentOptionsRequest$outboundSchema;
  /** @deprecated use `ListPaymentOptionsRequest$Outbound` instead. */
  export type Outbound = ListPaymentOptionsRequest$Outbound;
}

export function listPaymentOptionsRequestToJSON(
  listPaymentOptionsRequest: ListPaymentOptionsRequest,
): string {
  return JSON.stringify(
    ListPaymentOptionsRequest$outboundSchema.parse(listPaymentOptionsRequest),
  );
}

export function listPaymentOptionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPaymentOptionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPaymentOptionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPaymentOptionsRequest' from JSON`,
  );
}
