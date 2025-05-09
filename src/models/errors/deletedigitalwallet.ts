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
export type DeleteDigitalWalletResponse403DeleteDigitalWallet =
  | Error403
  | Error403Forbidden
  | Error403Active;

/** @internal */
export const DeleteDigitalWalletResponse403DeleteDigitalWallet$inboundSchema:
  z.ZodType<
    DeleteDigitalWalletResponse403DeleteDigitalWallet,
    z.ZodTypeDef,
    unknown
  > = z.union([
    Error403$inboundSchema,
    Error403Forbidden$inboundSchema,
    Error403Active$inboundSchema,
  ]);

/** @internal */
export type DeleteDigitalWalletResponse403DeleteDigitalWallet$Outbound =
  | Error403$Outbound
  | Error403Forbidden$Outbound
  | Error403Active$Outbound;

/** @internal */
export const DeleteDigitalWalletResponse403DeleteDigitalWallet$outboundSchema:
  z.ZodType<
    DeleteDigitalWalletResponse403DeleteDigitalWallet$Outbound,
    z.ZodTypeDef,
    DeleteDigitalWalletResponse403DeleteDigitalWallet
  > = z.union([
    Error403$outboundSchema,
    Error403Forbidden$outboundSchema,
    Error403Active$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteDigitalWalletResponse403DeleteDigitalWallet$ {
  /** @deprecated use `DeleteDigitalWalletResponse403DeleteDigitalWallet$inboundSchema` instead. */
  export const inboundSchema =
    DeleteDigitalWalletResponse403DeleteDigitalWallet$inboundSchema;
  /** @deprecated use `DeleteDigitalWalletResponse403DeleteDigitalWallet$outboundSchema` instead. */
  export const outboundSchema =
    DeleteDigitalWalletResponse403DeleteDigitalWallet$outboundSchema;
  /** @deprecated use `DeleteDigitalWalletResponse403DeleteDigitalWallet$Outbound` instead. */
  export type Outbound =
    DeleteDigitalWalletResponse403DeleteDigitalWallet$Outbound;
}

export function deleteDigitalWalletResponse403DeleteDigitalWalletToJSON(
  deleteDigitalWalletResponse403DeleteDigitalWallet:
    DeleteDigitalWalletResponse403DeleteDigitalWallet,
): string {
  return JSON.stringify(
    DeleteDigitalWalletResponse403DeleteDigitalWallet$outboundSchema.parse(
      deleteDigitalWalletResponse403DeleteDigitalWallet,
    ),
  );
}

export function deleteDigitalWalletResponse403DeleteDigitalWalletFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteDigitalWalletResponse403DeleteDigitalWallet,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteDigitalWalletResponse403DeleteDigitalWallet$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteDigitalWalletResponse403DeleteDigitalWallet' from JSON`,
  );
}
