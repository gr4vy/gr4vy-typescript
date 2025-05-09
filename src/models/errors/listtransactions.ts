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
export type ListTransactionsResponse403ListTransactions =
  | Error403
  | Error403Forbidden
  | Error403Active;

/** @internal */
export const ListTransactionsResponse403ListTransactions$inboundSchema:
  z.ZodType<
    ListTransactionsResponse403ListTransactions,
    z.ZodTypeDef,
    unknown
  > = z.union([
    Error403$inboundSchema,
    Error403Forbidden$inboundSchema,
    Error403Active$inboundSchema,
  ]);

/** @internal */
export type ListTransactionsResponse403ListTransactions$Outbound =
  | Error403$Outbound
  | Error403Forbidden$Outbound
  | Error403Active$Outbound;

/** @internal */
export const ListTransactionsResponse403ListTransactions$outboundSchema:
  z.ZodType<
    ListTransactionsResponse403ListTransactions$Outbound,
    z.ZodTypeDef,
    ListTransactionsResponse403ListTransactions
  > = z.union([
    Error403$outboundSchema,
    Error403Forbidden$outboundSchema,
    Error403Active$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsResponse403ListTransactions$ {
  /** @deprecated use `ListTransactionsResponse403ListTransactions$inboundSchema` instead. */
  export const inboundSchema =
    ListTransactionsResponse403ListTransactions$inboundSchema;
  /** @deprecated use `ListTransactionsResponse403ListTransactions$outboundSchema` instead. */
  export const outboundSchema =
    ListTransactionsResponse403ListTransactions$outboundSchema;
  /** @deprecated use `ListTransactionsResponse403ListTransactions$Outbound` instead. */
  export type Outbound = ListTransactionsResponse403ListTransactions$Outbound;
}

export function listTransactionsResponse403ListTransactionsToJSON(
  listTransactionsResponse403ListTransactions:
    ListTransactionsResponse403ListTransactions,
): string {
  return JSON.stringify(
    ListTransactionsResponse403ListTransactions$outboundSchema.parse(
      listTransactionsResponse403ListTransactions,
    ),
  );
}

export function listTransactionsResponse403ListTransactionsFromJSON(
  jsonString: string,
): SafeParseResult<
  ListTransactionsResponse403ListTransactions,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListTransactionsResponse403ListTransactions$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListTransactionsResponse403ListTransactions' from JSON`,
  );
}
