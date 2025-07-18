/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Airline,
  Airline$inboundSchema,
  Airline$Outbound,
  Airline$outboundSchema,
} from "./airline.js";

/**
 * Request body for capturing an authorized transaction.
 */
export type TransactionCapture = {
  /**
   * The amount to capture, in the smallest currency unit (e.g., cents). This must be less than or equal to the authorized amount, unless over-capture is available.
   */
  amount?: number | null | undefined;
  /**
   * The airline data to submit to the payment service during the capture call.
   */
  airline?: Airline | null | undefined;
};

/** @internal */
export const TransactionCapture$inboundSchema: z.ZodType<
  TransactionCapture,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.nullable(z.number().int()).optional(),
  airline: z.nullable(Airline$inboundSchema).optional(),
});

/** @internal */
export type TransactionCapture$Outbound = {
  amount?: number | null | undefined;
  airline?: Airline$Outbound | null | undefined;
};

/** @internal */
export const TransactionCapture$outboundSchema: z.ZodType<
  TransactionCapture$Outbound,
  z.ZodTypeDef,
  TransactionCapture
> = z.object({
  amount: z.nullable(z.number().int()).optional(),
  airline: z.nullable(Airline$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionCapture$ {
  /** @deprecated use `TransactionCapture$inboundSchema` instead. */
  export const inboundSchema = TransactionCapture$inboundSchema;
  /** @deprecated use `TransactionCapture$outboundSchema` instead. */
  export const outboundSchema = TransactionCapture$outboundSchema;
  /** @deprecated use `TransactionCapture$Outbound` instead. */
  export type Outbound = TransactionCapture$Outbound;
}

export function transactionCaptureToJSON(
  transactionCapture: TransactionCapture,
): string {
  return JSON.stringify(
    TransactionCapture$outboundSchema.parse(transactionCapture),
  );
}

export function transactionCaptureFromJSON(
  jsonString: string,
): SafeParseResult<TransactionCapture, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransactionCapture$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransactionCapture' from JSON`,
  );
}
