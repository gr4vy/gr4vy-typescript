/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListPaymentMethodsGlobals = {
  merchantAccountId?: string | undefined;
};

export type ListPaymentMethodsRequest = {
  /**
   * A pointer to the page of results to return.
   */
  cursor?: string | null | undefined;
  /**
   * The maximum number of items that are at returned.
   */
  limit?: number | undefined;
  /**
   * The ID of the buyer to filter payment methods by.
   */
  buyerId?: string | null | undefined;
  /**
   * The external identifier of the buyer to filter payment methods by.
   */
  buyerExternalIdentifier?: string | null | undefined;
  status?: Array<components.PaymentMethodStatus> | null | undefined;
  /**
   * The external identifier of the payment method to filter by.
   */
  externalIdentifier?: string | null | undefined;
  /**
   * The ID of the merchant account to use for this request.
   */
  merchantAccountId?: string | null | undefined;
};

export type ListPaymentMethodsResponse = {
  result: components.PaymentMethods;
};

/** @internal */
export const ListPaymentMethodsGlobals$inboundSchema: z.ZodType<
  ListPaymentMethodsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.string().optional(),
});

/** @internal */
export type ListPaymentMethodsGlobals$Outbound = {
  merchantAccountId?: string | undefined;
};

/** @internal */
export const ListPaymentMethodsGlobals$outboundSchema: z.ZodType<
  ListPaymentMethodsGlobals$Outbound,
  z.ZodTypeDef,
  ListPaymentMethodsGlobals
> = z.object({
  merchantAccountId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPaymentMethodsGlobals$ {
  /** @deprecated use `ListPaymentMethodsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListPaymentMethodsGlobals$inboundSchema;
  /** @deprecated use `ListPaymentMethodsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListPaymentMethodsGlobals$outboundSchema;
  /** @deprecated use `ListPaymentMethodsGlobals$Outbound` instead. */
  export type Outbound = ListPaymentMethodsGlobals$Outbound;
}

export function listPaymentMethodsGlobalsToJSON(
  listPaymentMethodsGlobals: ListPaymentMethodsGlobals,
): string {
  return JSON.stringify(
    ListPaymentMethodsGlobals$outboundSchema.parse(listPaymentMethodsGlobals),
  );
}

export function listPaymentMethodsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListPaymentMethodsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPaymentMethodsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPaymentMethodsGlobals' from JSON`,
  );
}

/** @internal */
export const ListPaymentMethodsRequest$inboundSchema: z.ZodType<
  ListPaymentMethodsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  buyer_id: z.nullable(z.string()).optional(),
  buyer_external_identifier: z.nullable(z.string()).optional(),
  status: z.nullable(z.array(components.PaymentMethodStatus$inboundSchema))
    .optional(),
  external_identifier: z.nullable(z.string()).optional(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "buyer_id": "buyerId",
    "buyer_external_identifier": "buyerExternalIdentifier",
    "external_identifier": "externalIdentifier",
  });
});

/** @internal */
export type ListPaymentMethodsRequest$Outbound = {
  cursor?: string | null | undefined;
  limit: number;
  buyer_id?: string | null | undefined;
  buyer_external_identifier?: string | null | undefined;
  status?: Array<string> | null | undefined;
  external_identifier?: string | null | undefined;
  merchantAccountId?: string | null | undefined;
};

/** @internal */
export const ListPaymentMethodsRequest$outboundSchema: z.ZodType<
  ListPaymentMethodsRequest$Outbound,
  z.ZodTypeDef,
  ListPaymentMethodsRequest
> = z.object({
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  buyerId: z.nullable(z.string()).optional(),
  buyerExternalIdentifier: z.nullable(z.string()).optional(),
  status: z.nullable(z.array(components.PaymentMethodStatus$outboundSchema))
    .optional(),
  externalIdentifier: z.nullable(z.string()).optional(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    buyerId: "buyer_id",
    buyerExternalIdentifier: "buyer_external_identifier",
    externalIdentifier: "external_identifier",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPaymentMethodsRequest$ {
  /** @deprecated use `ListPaymentMethodsRequest$inboundSchema` instead. */
  export const inboundSchema = ListPaymentMethodsRequest$inboundSchema;
  /** @deprecated use `ListPaymentMethodsRequest$outboundSchema` instead. */
  export const outboundSchema = ListPaymentMethodsRequest$outboundSchema;
  /** @deprecated use `ListPaymentMethodsRequest$Outbound` instead. */
  export type Outbound = ListPaymentMethodsRequest$Outbound;
}

export function listPaymentMethodsRequestToJSON(
  listPaymentMethodsRequest: ListPaymentMethodsRequest,
): string {
  return JSON.stringify(
    ListPaymentMethodsRequest$outboundSchema.parse(listPaymentMethodsRequest),
  );
}

export function listPaymentMethodsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPaymentMethodsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPaymentMethodsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPaymentMethodsRequest' from JSON`,
  );
}

/** @internal */
export const ListPaymentMethodsResponse$inboundSchema: z.ZodType<
  ListPaymentMethodsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.PaymentMethods$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListPaymentMethodsResponse$Outbound = {
  Result: components.PaymentMethods$Outbound;
};

/** @internal */
export const ListPaymentMethodsResponse$outboundSchema: z.ZodType<
  ListPaymentMethodsResponse$Outbound,
  z.ZodTypeDef,
  ListPaymentMethodsResponse
> = z.object({
  result: components.PaymentMethods$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPaymentMethodsResponse$ {
  /** @deprecated use `ListPaymentMethodsResponse$inboundSchema` instead. */
  export const inboundSchema = ListPaymentMethodsResponse$inboundSchema;
  /** @deprecated use `ListPaymentMethodsResponse$outboundSchema` instead. */
  export const outboundSchema = ListPaymentMethodsResponse$outboundSchema;
  /** @deprecated use `ListPaymentMethodsResponse$Outbound` instead. */
  export type Outbound = ListPaymentMethodsResponse$Outbound;
}

export function listPaymentMethodsResponseToJSON(
  listPaymentMethodsResponse: ListPaymentMethodsResponse,
): string {
  return JSON.stringify(
    ListPaymentMethodsResponse$outboundSchema.parse(listPaymentMethodsResponse),
  );
}

export function listPaymentMethodsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListPaymentMethodsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPaymentMethodsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPaymentMethodsResponse' from JSON`,
  );
}
