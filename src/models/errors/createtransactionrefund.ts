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
export type CreateTransactionRefundResponse403CreateTransactionRefund =
  | Error403
  | Error403Forbidden
  | Error403Active;

/** @internal */
export const CreateTransactionRefundResponse403CreateTransactionRefund$inboundSchema:
  z.ZodType<
    CreateTransactionRefundResponse403CreateTransactionRefund,
    z.ZodTypeDef,
    unknown
  > = z.union([
    Error403$inboundSchema,
    Error403Forbidden$inboundSchema,
    Error403Active$inboundSchema,
  ]);

/** @internal */
export type CreateTransactionRefundResponse403CreateTransactionRefund$Outbound =
  | Error403$Outbound
  | Error403Forbidden$Outbound
  | Error403Active$Outbound;

/** @internal */
export const CreateTransactionRefundResponse403CreateTransactionRefund$outboundSchema:
  z.ZodType<
    CreateTransactionRefundResponse403CreateTransactionRefund$Outbound,
    z.ZodTypeDef,
    CreateTransactionRefundResponse403CreateTransactionRefund
  > = z.union([
    Error403$outboundSchema,
    Error403Forbidden$outboundSchema,
    Error403Active$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTransactionRefundResponse403CreateTransactionRefund$ {
  /** @deprecated use `CreateTransactionRefundResponse403CreateTransactionRefund$inboundSchema` instead. */
  export const inboundSchema =
    CreateTransactionRefundResponse403CreateTransactionRefund$inboundSchema;
  /** @deprecated use `CreateTransactionRefundResponse403CreateTransactionRefund$outboundSchema` instead. */
  export const outboundSchema =
    CreateTransactionRefundResponse403CreateTransactionRefund$outboundSchema;
  /** @deprecated use `CreateTransactionRefundResponse403CreateTransactionRefund$Outbound` instead. */
  export type Outbound =
    CreateTransactionRefundResponse403CreateTransactionRefund$Outbound;
}

export function createTransactionRefundResponse403CreateTransactionRefundToJSON(
  createTransactionRefundResponse403CreateTransactionRefund:
    CreateTransactionRefundResponse403CreateTransactionRefund,
): string {
  return JSON.stringify(
    CreateTransactionRefundResponse403CreateTransactionRefund$outboundSchema
      .parse(createTransactionRefundResponse403CreateTransactionRefund),
  );
}

export function createTransactionRefundResponse403CreateTransactionRefundFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateTransactionRefundResponse403CreateTransactionRefund,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateTransactionRefundResponse403CreateTransactionRefund$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'CreateTransactionRefundResponse403CreateTransactionRefund' from JSON`,
  );
}
