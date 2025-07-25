/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type VoidTransactionGlobals = {
  merchantAccountId?: string | undefined;
};

export type VoidTransactionRequest = {
  /**
   * The ID of the transaction
   */
  transactionId: string;
  /**
   * The preferred resource type in the response.
   */
  prefer?: Array<string> | null | undefined;
  /**
   * The ID of the merchant account to use for this request.
   */
  merchantAccountId?: string | null | undefined;
};

/**
 * Successful Response
 */
export type VoidTransactionResponseVoidTransaction =
  | components.Transaction
  | components.TransactionVoid;

/** @internal */
export const VoidTransactionGlobals$inboundSchema: z.ZodType<
  VoidTransactionGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.string().optional(),
});

/** @internal */
export type VoidTransactionGlobals$Outbound = {
  merchantAccountId?: string | undefined;
};

/** @internal */
export const VoidTransactionGlobals$outboundSchema: z.ZodType<
  VoidTransactionGlobals$Outbound,
  z.ZodTypeDef,
  VoidTransactionGlobals
> = z.object({
  merchantAccountId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VoidTransactionGlobals$ {
  /** @deprecated use `VoidTransactionGlobals$inboundSchema` instead. */
  export const inboundSchema = VoidTransactionGlobals$inboundSchema;
  /** @deprecated use `VoidTransactionGlobals$outboundSchema` instead. */
  export const outboundSchema = VoidTransactionGlobals$outboundSchema;
  /** @deprecated use `VoidTransactionGlobals$Outbound` instead. */
  export type Outbound = VoidTransactionGlobals$Outbound;
}

export function voidTransactionGlobalsToJSON(
  voidTransactionGlobals: VoidTransactionGlobals,
): string {
  return JSON.stringify(
    VoidTransactionGlobals$outboundSchema.parse(voidTransactionGlobals),
  );
}

export function voidTransactionGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<VoidTransactionGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VoidTransactionGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VoidTransactionGlobals' from JSON`,
  );
}

/** @internal */
export const VoidTransactionRequest$inboundSchema: z.ZodType<
  VoidTransactionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  transaction_id: z.string(),
  prefer: z.nullable(z.array(z.string())).optional(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "transaction_id": "transactionId",
  });
});

/** @internal */
export type VoidTransactionRequest$Outbound = {
  transaction_id: string;
  prefer?: Array<string> | null | undefined;
  merchantAccountId?: string | null | undefined;
};

/** @internal */
export const VoidTransactionRequest$outboundSchema: z.ZodType<
  VoidTransactionRequest$Outbound,
  z.ZodTypeDef,
  VoidTransactionRequest
> = z.object({
  transactionId: z.string(),
  prefer: z.nullable(z.array(z.string())).optional(),
  merchantAccountId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    transactionId: "transaction_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VoidTransactionRequest$ {
  /** @deprecated use `VoidTransactionRequest$inboundSchema` instead. */
  export const inboundSchema = VoidTransactionRequest$inboundSchema;
  /** @deprecated use `VoidTransactionRequest$outboundSchema` instead. */
  export const outboundSchema = VoidTransactionRequest$outboundSchema;
  /** @deprecated use `VoidTransactionRequest$Outbound` instead. */
  export type Outbound = VoidTransactionRequest$Outbound;
}

export function voidTransactionRequestToJSON(
  voidTransactionRequest: VoidTransactionRequest,
): string {
  return JSON.stringify(
    VoidTransactionRequest$outboundSchema.parse(voidTransactionRequest),
  );
}

export function voidTransactionRequestFromJSON(
  jsonString: string,
): SafeParseResult<VoidTransactionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VoidTransactionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VoidTransactionRequest' from JSON`,
  );
}

/** @internal */
export const VoidTransactionResponseVoidTransaction$inboundSchema: z.ZodType<
  VoidTransactionResponseVoidTransaction,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.Transaction$inboundSchema,
  components.TransactionVoid$inboundSchema,
]);

/** @internal */
export type VoidTransactionResponseVoidTransaction$Outbound =
  | components.Transaction$Outbound
  | components.TransactionVoid$Outbound;

/** @internal */
export const VoidTransactionResponseVoidTransaction$outboundSchema: z.ZodType<
  VoidTransactionResponseVoidTransaction$Outbound,
  z.ZodTypeDef,
  VoidTransactionResponseVoidTransaction
> = z.union([
  components.Transaction$outboundSchema,
  components.TransactionVoid$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VoidTransactionResponseVoidTransaction$ {
  /** @deprecated use `VoidTransactionResponseVoidTransaction$inboundSchema` instead. */
  export const inboundSchema =
    VoidTransactionResponseVoidTransaction$inboundSchema;
  /** @deprecated use `VoidTransactionResponseVoidTransaction$outboundSchema` instead. */
  export const outboundSchema =
    VoidTransactionResponseVoidTransaction$outboundSchema;
  /** @deprecated use `VoidTransactionResponseVoidTransaction$Outbound` instead. */
  export type Outbound = VoidTransactionResponseVoidTransaction$Outbound;
}

export function voidTransactionResponseVoidTransactionToJSON(
  voidTransactionResponseVoidTransaction:
    VoidTransactionResponseVoidTransaction,
): string {
  return JSON.stringify(
    VoidTransactionResponseVoidTransaction$outboundSchema.parse(
      voidTransactionResponseVoidTransaction,
    ),
  );
}

export function voidTransactionResponseVoidTransactionFromJSON(
  jsonString: string,
): SafeParseResult<VoidTransactionResponseVoidTransaction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      VoidTransactionResponseVoidTransaction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VoidTransactionResponseVoidTransaction' from JSON`,
  );
}
