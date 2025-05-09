/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateMerchantAccountRequest = {
  timeoutInSeconds?: number | undefined;
  merchantAccountCreate: components.MerchantAccountCreate;
};

/** @internal */
export const CreateMerchantAccountRequest$inboundSchema: z.ZodType<
  CreateMerchantAccountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  timeout_in_seconds: z.number().default(1),
  MerchantAccountCreate: components.MerchantAccountCreate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "timeout_in_seconds": "timeoutInSeconds",
    "MerchantAccountCreate": "merchantAccountCreate",
  });
});

/** @internal */
export type CreateMerchantAccountRequest$Outbound = {
  timeout_in_seconds: number;
  MerchantAccountCreate: components.MerchantAccountCreate$Outbound;
};

/** @internal */
export const CreateMerchantAccountRequest$outboundSchema: z.ZodType<
  CreateMerchantAccountRequest$Outbound,
  z.ZodTypeDef,
  CreateMerchantAccountRequest
> = z.object({
  timeoutInSeconds: z.number().default(1),
  merchantAccountCreate: components.MerchantAccountCreate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    timeoutInSeconds: "timeout_in_seconds",
    merchantAccountCreate: "MerchantAccountCreate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMerchantAccountRequest$ {
  /** @deprecated use `CreateMerchantAccountRequest$inboundSchema` instead. */
  export const inboundSchema = CreateMerchantAccountRequest$inboundSchema;
  /** @deprecated use `CreateMerchantAccountRequest$outboundSchema` instead. */
  export const outboundSchema = CreateMerchantAccountRequest$outboundSchema;
  /** @deprecated use `CreateMerchantAccountRequest$Outbound` instead. */
  export type Outbound = CreateMerchantAccountRequest$Outbound;
}

export function createMerchantAccountRequestToJSON(
  createMerchantAccountRequest: CreateMerchantAccountRequest,
): string {
  return JSON.stringify(
    CreateMerchantAccountRequest$outboundSchema.parse(
      createMerchantAccountRequest,
    ),
  );
}

export function createMerchantAccountRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateMerchantAccountRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMerchantAccountRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMerchantAccountRequest' from JSON`,
  );
}
