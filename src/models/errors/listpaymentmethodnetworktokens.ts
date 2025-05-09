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
export type ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens =
  | Error403
  | Error403Forbidden
  | Error403Active;

/** @internal */
export const ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$inboundSchema:
  z.ZodType<
    ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens,
    z.ZodTypeDef,
    unknown
  > = z.union([
    Error403$inboundSchema,
    Error403Forbidden$inboundSchema,
    Error403Active$inboundSchema,
  ]);

/** @internal */
export type ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$Outbound =
  | Error403$Outbound
  | Error403Forbidden$Outbound
  | Error403Active$Outbound;

/** @internal */
export const ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$outboundSchema:
  z.ZodType<
    ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$Outbound,
    z.ZodTypeDef,
    ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens
  > = z.union([
    Error403$outboundSchema,
    Error403Forbidden$outboundSchema,
    Error403Active$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$ {
  /** @deprecated use `ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$inboundSchema` instead. */
  export const inboundSchema =
    ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$inboundSchema;
  /** @deprecated use `ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$outboundSchema` instead. */
  export const outboundSchema =
    ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$outboundSchema;
  /** @deprecated use `ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$Outbound` instead. */
  export type Outbound =
    ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$Outbound;
}

export function listPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokensToJSON(
  listPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens:
    ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens,
): string {
  return JSON.stringify(
    ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$outboundSchema
      .parse(
        listPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens,
      ),
  );
}

export function listPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokensFromJSON(
  jsonString: string,
): SafeParseResult<
  ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'ListPaymentMethodNetworkTokensResponse403ListPaymentMethodNetworkTokens' from JSON`,
  );
}
