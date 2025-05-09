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
export type ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens =
  | Error403
  | Error403Forbidden
  | Error403Active;

/** @internal */
export const ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$inboundSchema:
  z.ZodType<
    ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens,
    z.ZodTypeDef,
    unknown
  > = z.union([
    Error403$inboundSchema,
    Error403Forbidden$inboundSchema,
    Error403Active$inboundSchema,
  ]);

/** @internal */
export type ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$Outbound =
  | Error403$Outbound
  | Error403Forbidden$Outbound
  | Error403Active$Outbound;

/** @internal */
export const ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$outboundSchema:
  z.ZodType<
    ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$Outbound,
    z.ZodTypeDef,
    ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens
  > = z.union([
    Error403$outboundSchema,
    Error403Forbidden$outboundSchema,
    Error403Active$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$ {
  /** @deprecated use `ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$inboundSchema` instead. */
  export const inboundSchema =
    ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$inboundSchema;
  /** @deprecated use `ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$outboundSchema` instead. */
  export const outboundSchema =
    ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$outboundSchema;
  /** @deprecated use `ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$Outbound` instead. */
  export type Outbound =
    ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$Outbound;
}

export function listPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokensToJSON(
  listPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens:
    ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens,
): string {
  return JSON.stringify(
    ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$outboundSchema
      .parse(
        listPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens,
      ),
  );
}

export function listPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokensFromJSON(
  jsonString: string,
): SafeParseResult<
  ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'ListPaymentMethodPaymentServiceTokensResponse403ListPaymentMethodPaymentServiceTokens' from JSON`,
  );
}
