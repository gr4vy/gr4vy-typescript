/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const PaymentServiceStatus = {
  Pending: "pending",
  Created: "created",
  Failed: "failed",
} as const;
export type PaymentServiceStatus = OpenEnum<typeof PaymentServiceStatus>;

/** @internal */
export const PaymentServiceStatus$inboundSchema: z.ZodType<
  PaymentServiceStatus,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(PaymentServiceStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const PaymentServiceStatus$outboundSchema: z.ZodType<
  PaymentServiceStatus,
  z.ZodTypeDef,
  PaymentServiceStatus
> = z.union([
  z.nativeEnum(PaymentServiceStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentServiceStatus$ {
  /** @deprecated use `PaymentServiceStatus$inboundSchema` instead. */
  export const inboundSchema = PaymentServiceStatus$inboundSchema;
  /** @deprecated use `PaymentServiceStatus$outboundSchema` instead. */
  export const outboundSchema = PaymentServiceStatus$outboundSchema;
}
