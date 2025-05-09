/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Error403,
  Error403$inboundSchema,
  Error403$Outbound,
  Error403$outboundSchema,
} from "./error403.js";
import {
  Error403Active,
  Error403Active$inboundSchema,
  Error403Active$Outbound,
  Error403Active$outboundSchema,
} from "./error403active.js";
import {
  Error403Forbidden,
  Error403Forbidden$inboundSchema,
  Error403Forbidden$Outbound,
  Error403Forbidden$outboundSchema,
} from "./error403forbidden.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * The credentials were invalid or the caller did not have permission to act on the resource.
 */
export type ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods =
  | Error403
  | Error403Forbidden
  | Error403Active;

/** @internal */
export const ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$inboundSchema:
  z.ZodType<
    ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods,
    z.ZodTypeDef,
    unknown
  > = z.union([
    Error403$inboundSchema,
    Error403Forbidden$inboundSchema,
    Error403Active$inboundSchema,
  ]);

/** @internal */
export type ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$Outbound =
  | Error403$Outbound
  | Error403Forbidden$Outbound
  | Error403Active$Outbound;

/** @internal */
export const ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$outboundSchema:
  z.ZodType<
    ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$Outbound,
    z.ZodTypeDef,
    ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods
  > = z.union([
    Error403$outboundSchema,
    Error403Forbidden$outboundSchema,
    Error403Active$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$ {
  /** @deprecated use `ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$inboundSchema` instead. */
  export const inboundSchema =
    ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$inboundSchema;
  /** @deprecated use `ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$outboundSchema` instead. */
  export const outboundSchema =
    ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$outboundSchema;
  /** @deprecated use `ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$Outbound` instead. */
  export type Outbound =
    ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$Outbound;
}

export function listBuyerPaymentMethodsResponse403ListBuyerPaymentMethodsToJSON(
  listBuyerPaymentMethodsResponse403ListBuyerPaymentMethods:
    ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods,
): string {
  return JSON.stringify(
    ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$outboundSchema
      .parse(listBuyerPaymentMethodsResponse403ListBuyerPaymentMethods),
  );
}

export function listBuyerPaymentMethodsResponse403ListBuyerPaymentMethodsFromJSON(
  jsonString: string,
): SafeParseResult<
  ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'ListBuyerPaymentMethodsResponse403ListBuyerPaymentMethods' from JSON`,
  );
}
