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
export type CreateFullTransactionRefundResponse403CreateFullTransactionRefund =
  | Error403
  | Error403Forbidden
  | Error403Active;

/** @internal */
export const CreateFullTransactionRefundResponse403CreateFullTransactionRefund$inboundSchema:
  z.ZodType<
    CreateFullTransactionRefundResponse403CreateFullTransactionRefund,
    z.ZodTypeDef,
    unknown
  > = z.union([
    Error403$inboundSchema,
    Error403Forbidden$inboundSchema,
    Error403Active$inboundSchema,
  ]);

/** @internal */
export type CreateFullTransactionRefundResponse403CreateFullTransactionRefund$Outbound =
  | Error403$Outbound
  | Error403Forbidden$Outbound
  | Error403Active$Outbound;

/** @internal */
export const CreateFullTransactionRefundResponse403CreateFullTransactionRefund$outboundSchema:
  z.ZodType<
    CreateFullTransactionRefundResponse403CreateFullTransactionRefund$Outbound,
    z.ZodTypeDef,
    CreateFullTransactionRefundResponse403CreateFullTransactionRefund
  > = z.union([
    Error403$outboundSchema,
    Error403Forbidden$outboundSchema,
    Error403Active$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateFullTransactionRefundResponse403CreateFullTransactionRefund$ {
  /** @deprecated use `CreateFullTransactionRefundResponse403CreateFullTransactionRefund$inboundSchema` instead. */
  export const inboundSchema =
    CreateFullTransactionRefundResponse403CreateFullTransactionRefund$inboundSchema;
  /** @deprecated use `CreateFullTransactionRefundResponse403CreateFullTransactionRefund$outboundSchema` instead. */
  export const outboundSchema =
    CreateFullTransactionRefundResponse403CreateFullTransactionRefund$outboundSchema;
  /** @deprecated use `CreateFullTransactionRefundResponse403CreateFullTransactionRefund$Outbound` instead. */
  export type Outbound =
    CreateFullTransactionRefundResponse403CreateFullTransactionRefund$Outbound;
}

export function createFullTransactionRefundResponse403CreateFullTransactionRefundToJSON(
  createFullTransactionRefundResponse403CreateFullTransactionRefund:
    CreateFullTransactionRefundResponse403CreateFullTransactionRefund,
): string {
  return JSON.stringify(
    CreateFullTransactionRefundResponse403CreateFullTransactionRefund$outboundSchema
      .parse(createFullTransactionRefundResponse403CreateFullTransactionRefund),
  );
}

export function createFullTransactionRefundResponse403CreateFullTransactionRefundFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateFullTransactionRefundResponse403CreateFullTransactionRefund,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateFullTransactionRefundResponse403CreateFullTransactionRefund$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'CreateFullTransactionRefundResponse403CreateFullTransactionRefund' from JSON`,
  );
}
