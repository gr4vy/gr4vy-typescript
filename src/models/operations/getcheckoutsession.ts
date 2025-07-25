/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCheckoutSessionGlobals = {
  merchantAccountId?: string | undefined;
};

export type GetCheckoutSessionRequest = {
  /**
   * The ID of the checkout session.
   */
  sessionId: string;
  /**
   * The ID of the merchant account to use for this request.
   */
  merchantAccountId?: string | null | undefined;
};

/** @internal */
export const GetCheckoutSessionGlobals$inboundSchema: z.ZodType<
  GetCheckoutSessionGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.string().optional(),
});

/** @internal */
export type GetCheckoutSessionGlobals$Outbound = {
  merchantAccountId?: string | undefined;
};

/** @internal */
export const GetCheckoutSessionGlobals$outboundSchema: z.ZodType<
  GetCheckoutSessionGlobals$Outbound,
  z.ZodTypeDef,
  GetCheckoutSessionGlobals
> = z.object({
  merchantAccountId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckoutSessionGlobals$ {
  /** @deprecated use `GetCheckoutSessionGlobals$inboundSchema` instead. */
  export const inboundSchema = GetCheckoutSessionGlobals$inboundSchema;
  /** @deprecated use `GetCheckoutSessionGlobals$outboundSchema` instead. */
  export const outboundSchema = GetCheckoutSessionGlobals$outboundSchema;
  /** @deprecated use `GetCheckoutSessionGlobals$Outbound` instead. */
  export type Outbound = GetCheckoutSessionGlobals$Outbound;
}

export function getCheckoutSessionGlobalsToJSON(
  getCheckoutSessionGlobals: GetCheckoutSessionGlobals,
): string {
  return JSON.stringify(
    GetCheckoutSessionGlobals$outboundSchema.parse(getCheckoutSessionGlobals),
  );
}

export function getCheckoutSessionGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetCheckoutSessionGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCheckoutSessionGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCheckoutSessionGlobals' from JSON`,
  );
}

/** @internal */
export const GetCheckoutSessionRequest$inboundSchema: z.ZodType<
  GetCheckoutSessionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  session_id: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "session_id": "sessionId",
  });
});

/** @internal */
export type GetCheckoutSessionRequest$Outbound = {
  session_id: string;
  merchantAccountId?: string | null | undefined;
};

/** @internal */
export const GetCheckoutSessionRequest$outboundSchema: z.ZodType<
  GetCheckoutSessionRequest$Outbound,
  z.ZodTypeDef,
  GetCheckoutSessionRequest
> = z.object({
  sessionId: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    sessionId: "session_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckoutSessionRequest$ {
  /** @deprecated use `GetCheckoutSessionRequest$inboundSchema` instead. */
  export const inboundSchema = GetCheckoutSessionRequest$inboundSchema;
  /** @deprecated use `GetCheckoutSessionRequest$outboundSchema` instead. */
  export const outboundSchema = GetCheckoutSessionRequest$outboundSchema;
  /** @deprecated use `GetCheckoutSessionRequest$Outbound` instead. */
  export type Outbound = GetCheckoutSessionRequest$Outbound;
}

export function getCheckoutSessionRequestToJSON(
  getCheckoutSessionRequest: GetCheckoutSessionRequest,
): string {
  return JSON.stringify(
    GetCheckoutSessionRequest$outboundSchema.parse(getCheckoutSessionRequest),
  );
}

export function getCheckoutSessionRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCheckoutSessionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCheckoutSessionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCheckoutSessionRequest' from JSON`,
  );
}
