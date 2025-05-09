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
export type ListBuyersResponse403ListBuyers =
  | Error403
  | Error403Forbidden
  | Error403Active;

/** @internal */
export const ListBuyersResponse403ListBuyers$inboundSchema: z.ZodType<
  ListBuyersResponse403ListBuyers,
  z.ZodTypeDef,
  unknown
> = z.union([
  Error403$inboundSchema,
  Error403Forbidden$inboundSchema,
  Error403Active$inboundSchema,
]);

/** @internal */
export type ListBuyersResponse403ListBuyers$Outbound =
  | Error403$Outbound
  | Error403Forbidden$Outbound
  | Error403Active$Outbound;

/** @internal */
export const ListBuyersResponse403ListBuyers$outboundSchema: z.ZodType<
  ListBuyersResponse403ListBuyers$Outbound,
  z.ZodTypeDef,
  ListBuyersResponse403ListBuyers
> = z.union([
  Error403$outboundSchema,
  Error403Forbidden$outboundSchema,
  Error403Active$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBuyersResponse403ListBuyers$ {
  /** @deprecated use `ListBuyersResponse403ListBuyers$inboundSchema` instead. */
  export const inboundSchema = ListBuyersResponse403ListBuyers$inboundSchema;
  /** @deprecated use `ListBuyersResponse403ListBuyers$outboundSchema` instead. */
  export const outboundSchema = ListBuyersResponse403ListBuyers$outboundSchema;
  /** @deprecated use `ListBuyersResponse403ListBuyers$Outbound` instead. */
  export type Outbound = ListBuyersResponse403ListBuyers$Outbound;
}

export function listBuyersResponse403ListBuyersToJSON(
  listBuyersResponse403ListBuyers: ListBuyersResponse403ListBuyers,
): string {
  return JSON.stringify(
    ListBuyersResponse403ListBuyers$outboundSchema.parse(
      listBuyersResponse403ListBuyers,
    ),
  );
}

export function listBuyersResponse403ListBuyersFromJSON(
  jsonString: string,
): SafeParseResult<ListBuyersResponse403ListBuyers, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListBuyersResponse403ListBuyers$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListBuyersResponse403ListBuyers' from JSON`,
  );
}
