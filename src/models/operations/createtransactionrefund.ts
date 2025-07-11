/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateTransactionRefundGlobals = {
  merchantAccountId?: string | undefined;
};

export type CreateTransactionRefundRequest = {
  /**
   * The ID of the transaction
   */
  transactionId: string;
  /**
   * The ID of the merchant account to use for this request.
   */
  merchantAccountId?: string | null | undefined;
  transactionRefundCreate: components.TransactionRefundCreate;
};

/** @internal */
export const CreateTransactionRefundGlobals$inboundSchema: z.ZodType<
  CreateTransactionRefundGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.string().optional(),
});

/** @internal */
export type CreateTransactionRefundGlobals$Outbound = {
  merchantAccountId?: string | undefined;
};

/** @internal */
export const CreateTransactionRefundGlobals$outboundSchema: z.ZodType<
  CreateTransactionRefundGlobals$Outbound,
  z.ZodTypeDef,
  CreateTransactionRefundGlobals
> = z.object({
  merchantAccountId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTransactionRefundGlobals$ {
  /** @deprecated use `CreateTransactionRefundGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateTransactionRefundGlobals$inboundSchema;
  /** @deprecated use `CreateTransactionRefundGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateTransactionRefundGlobals$outboundSchema;
  /** @deprecated use `CreateTransactionRefundGlobals$Outbound` instead. */
  export type Outbound = CreateTransactionRefundGlobals$Outbound;
}

export function createTransactionRefundGlobalsToJSON(
  createTransactionRefundGlobals: CreateTransactionRefundGlobals,
): string {
  return JSON.stringify(
    CreateTransactionRefundGlobals$outboundSchema.parse(
      createTransactionRefundGlobals,
    ),
  );
}

export function createTransactionRefundGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CreateTransactionRefundGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTransactionRefundGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTransactionRefundGlobals' from JSON`,
  );
}

/** @internal */
export const CreateTransactionRefundRequest$inboundSchema: z.ZodType<
  CreateTransactionRefundRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  transaction_id: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
  TransactionRefundCreate: components.TransactionRefundCreate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "transaction_id": "transactionId",
    "TransactionRefundCreate": "transactionRefundCreate",
  });
});

/** @internal */
export type CreateTransactionRefundRequest$Outbound = {
  transaction_id: string;
  merchantAccountId?: string | null | undefined;
  TransactionRefundCreate: components.TransactionRefundCreate$Outbound;
};

/** @internal */
export const CreateTransactionRefundRequest$outboundSchema: z.ZodType<
  CreateTransactionRefundRequest$Outbound,
  z.ZodTypeDef,
  CreateTransactionRefundRequest
> = z.object({
  transactionId: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
  transactionRefundCreate: components.TransactionRefundCreate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    transactionId: "transaction_id",
    transactionRefundCreate: "TransactionRefundCreate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTransactionRefundRequest$ {
  /** @deprecated use `CreateTransactionRefundRequest$inboundSchema` instead. */
  export const inboundSchema = CreateTransactionRefundRequest$inboundSchema;
  /** @deprecated use `CreateTransactionRefundRequest$outboundSchema` instead. */
  export const outboundSchema = CreateTransactionRefundRequest$outboundSchema;
  /** @deprecated use `CreateTransactionRefundRequest$Outbound` instead. */
  export type Outbound = CreateTransactionRefundRequest$Outbound;
}

export function createTransactionRefundRequestToJSON(
  createTransactionRefundRequest: CreateTransactionRefundRequest,
): string {
  return JSON.stringify(
    CreateTransactionRefundRequest$outboundSchema.parse(
      createTransactionRefundRequest,
    ),
  );
}

export function createTransactionRefundRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateTransactionRefundRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTransactionRefundRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTransactionRefundRequest' from JSON`,
  );
}
