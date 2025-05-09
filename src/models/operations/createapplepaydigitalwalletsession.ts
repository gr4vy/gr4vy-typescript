/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateApplePayDigitalWalletSessionGlobals = {
  merchantAccountId?: string | undefined;
};

export type CreateApplePayDigitalWalletSessionRequest = {
  /**
   * The ID of the merchant account to use for this request.
   */
  merchantAccountId?: string | null | undefined;
  applePaySessionRequest: components.ApplePaySessionRequest;
};

/** @internal */
export const CreateApplePayDigitalWalletSessionGlobals$inboundSchema: z.ZodType<
  CreateApplePayDigitalWalletSessionGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.string().optional(),
});

/** @internal */
export type CreateApplePayDigitalWalletSessionGlobals$Outbound = {
  merchantAccountId?: string | undefined;
};

/** @internal */
export const CreateApplePayDigitalWalletSessionGlobals$outboundSchema:
  z.ZodType<
    CreateApplePayDigitalWalletSessionGlobals$Outbound,
    z.ZodTypeDef,
    CreateApplePayDigitalWalletSessionGlobals
  > = z.object({
    merchantAccountId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateApplePayDigitalWalletSessionGlobals$ {
  /** @deprecated use `CreateApplePayDigitalWalletSessionGlobals$inboundSchema` instead. */
  export const inboundSchema =
    CreateApplePayDigitalWalletSessionGlobals$inboundSchema;
  /** @deprecated use `CreateApplePayDigitalWalletSessionGlobals$outboundSchema` instead. */
  export const outboundSchema =
    CreateApplePayDigitalWalletSessionGlobals$outboundSchema;
  /** @deprecated use `CreateApplePayDigitalWalletSessionGlobals$Outbound` instead. */
  export type Outbound = CreateApplePayDigitalWalletSessionGlobals$Outbound;
}

export function createApplePayDigitalWalletSessionGlobalsToJSON(
  createApplePayDigitalWalletSessionGlobals:
    CreateApplePayDigitalWalletSessionGlobals,
): string {
  return JSON.stringify(
    CreateApplePayDigitalWalletSessionGlobals$outboundSchema.parse(
      createApplePayDigitalWalletSessionGlobals,
    ),
  );
}

export function createApplePayDigitalWalletSessionGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateApplePayDigitalWalletSessionGlobals,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateApplePayDigitalWalletSessionGlobals$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateApplePayDigitalWalletSessionGlobals' from JSON`,
  );
}

/** @internal */
export const CreateApplePayDigitalWalletSessionRequest$inboundSchema: z.ZodType<
  CreateApplePayDigitalWalletSessionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.nullable(z.string()).optional(),
  ApplePaySessionRequest: components.ApplePaySessionRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "ApplePaySessionRequest": "applePaySessionRequest",
  });
});

/** @internal */
export type CreateApplePayDigitalWalletSessionRequest$Outbound = {
  merchantAccountId?: string | null | undefined;
  ApplePaySessionRequest: components.ApplePaySessionRequest$Outbound;
};

/** @internal */
export const CreateApplePayDigitalWalletSessionRequest$outboundSchema:
  z.ZodType<
    CreateApplePayDigitalWalletSessionRequest$Outbound,
    z.ZodTypeDef,
    CreateApplePayDigitalWalletSessionRequest
  > = z.object({
    merchantAccountId: z.nullable(z.string()).optional(),
    applePaySessionRequest: components.ApplePaySessionRequest$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      applePaySessionRequest: "ApplePaySessionRequest",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateApplePayDigitalWalletSessionRequest$ {
  /** @deprecated use `CreateApplePayDigitalWalletSessionRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateApplePayDigitalWalletSessionRequest$inboundSchema;
  /** @deprecated use `CreateApplePayDigitalWalletSessionRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateApplePayDigitalWalletSessionRequest$outboundSchema;
  /** @deprecated use `CreateApplePayDigitalWalletSessionRequest$Outbound` instead. */
  export type Outbound = CreateApplePayDigitalWalletSessionRequest$Outbound;
}

export function createApplePayDigitalWalletSessionRequestToJSON(
  createApplePayDigitalWalletSessionRequest:
    CreateApplePayDigitalWalletSessionRequest,
): string {
  return JSON.stringify(
    CreateApplePayDigitalWalletSessionRequest$outboundSchema.parse(
      createApplePayDigitalWalletSessionRequest,
    ),
  );
}

export function createApplePayDigitalWalletSessionRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateApplePayDigitalWalletSessionRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateApplePayDigitalWalletSessionRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateApplePayDigitalWalletSessionRequest' from JSON`,
  );
}
