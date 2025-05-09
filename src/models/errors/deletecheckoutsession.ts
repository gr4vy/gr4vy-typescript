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
export type DeleteCheckoutSessionResponse403DeleteCheckoutSession =
  | Error403
  | Error403Forbidden
  | Error403Active;

/** @internal */
export const DeleteCheckoutSessionResponse403DeleteCheckoutSession$inboundSchema:
  z.ZodType<
    DeleteCheckoutSessionResponse403DeleteCheckoutSession,
    z.ZodTypeDef,
    unknown
  > = z.union([
    Error403$inboundSchema,
    Error403Forbidden$inboundSchema,
    Error403Active$inboundSchema,
  ]);

/** @internal */
export type DeleteCheckoutSessionResponse403DeleteCheckoutSession$Outbound =
  | Error403$Outbound
  | Error403Forbidden$Outbound
  | Error403Active$Outbound;

/** @internal */
export const DeleteCheckoutSessionResponse403DeleteCheckoutSession$outboundSchema:
  z.ZodType<
    DeleteCheckoutSessionResponse403DeleteCheckoutSession$Outbound,
    z.ZodTypeDef,
    DeleteCheckoutSessionResponse403DeleteCheckoutSession
  > = z.union([
    Error403$outboundSchema,
    Error403Forbidden$outboundSchema,
    Error403Active$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteCheckoutSessionResponse403DeleteCheckoutSession$ {
  /** @deprecated use `DeleteCheckoutSessionResponse403DeleteCheckoutSession$inboundSchema` instead. */
  export const inboundSchema =
    DeleteCheckoutSessionResponse403DeleteCheckoutSession$inboundSchema;
  /** @deprecated use `DeleteCheckoutSessionResponse403DeleteCheckoutSession$outboundSchema` instead. */
  export const outboundSchema =
    DeleteCheckoutSessionResponse403DeleteCheckoutSession$outboundSchema;
  /** @deprecated use `DeleteCheckoutSessionResponse403DeleteCheckoutSession$Outbound` instead. */
  export type Outbound =
    DeleteCheckoutSessionResponse403DeleteCheckoutSession$Outbound;
}

export function deleteCheckoutSessionResponse403DeleteCheckoutSessionToJSON(
  deleteCheckoutSessionResponse403DeleteCheckoutSession:
    DeleteCheckoutSessionResponse403DeleteCheckoutSession,
): string {
  return JSON.stringify(
    DeleteCheckoutSessionResponse403DeleteCheckoutSession$outboundSchema.parse(
      deleteCheckoutSessionResponse403DeleteCheckoutSession,
    ),
  );
}

export function deleteCheckoutSessionResponse403DeleteCheckoutSessionFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteCheckoutSessionResponse403DeleteCheckoutSession,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteCheckoutSessionResponse403DeleteCheckoutSession$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteCheckoutSessionResponse403DeleteCheckoutSession' from JSON`,
  );
}
