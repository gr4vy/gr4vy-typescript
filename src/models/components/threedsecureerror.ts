/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ThreeDSecureError = {
  /**
   * The error code.
   */
  code?: string | null | undefined;
  /**
   * The error description.
   */
  description?: string | null | undefined;
  /**
   * Detail about the 3DS error.
   */
  detail?: string | null | undefined;
  /**
   * Code indicating the 3-D Secure component that identified the error.
   */
  component?: string | null | undefined;
};

/** @internal */
export const ThreeDSecureError$inboundSchema: z.ZodType<
  ThreeDSecureError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  detail: z.nullable(z.string()).optional(),
  component: z.nullable(z.string()).optional(),
});

/** @internal */
export type ThreeDSecureError$Outbound = {
  code?: string | null | undefined;
  description?: string | null | undefined;
  detail?: string | null | undefined;
  component?: string | null | undefined;
};

/** @internal */
export const ThreeDSecureError$outboundSchema: z.ZodType<
  ThreeDSecureError$Outbound,
  z.ZodTypeDef,
  ThreeDSecureError
> = z.object({
  code: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  detail: z.nullable(z.string()).optional(),
  component: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ThreeDSecureError$ {
  /** @deprecated use `ThreeDSecureError$inboundSchema` instead. */
  export const inboundSchema = ThreeDSecureError$inboundSchema;
  /** @deprecated use `ThreeDSecureError$outboundSchema` instead. */
  export const outboundSchema = ThreeDSecureError$outboundSchema;
  /** @deprecated use `ThreeDSecureError$Outbound` instead. */
  export type Outbound = ThreeDSecureError$Outbound;
}

export function threeDSecureErrorToJSON(
  threeDSecureError: ThreeDSecureError,
): string {
  return JSON.stringify(
    ThreeDSecureError$outboundSchema.parse(threeDSecureError),
  );
}

export function threeDSecureErrorFromJSON(
  jsonString: string,
): SafeParseResult<ThreeDSecureError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ThreeDSecureError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ThreeDSecureError' from JSON`,
  );
}
