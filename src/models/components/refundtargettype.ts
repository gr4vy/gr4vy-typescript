/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const RefundTargetType = {
  PaymentMethod: "payment-method",
  GiftCardRedemption: "gift-card-redemption",
} as const;
export type RefundTargetType = OpenEnum<typeof RefundTargetType>;

/** @internal */
export const RefundTargetType$inboundSchema: z.ZodType<
  RefundTargetType,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(RefundTargetType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const RefundTargetType$outboundSchema: z.ZodType<
  RefundTargetType,
  z.ZodTypeDef,
  RefundTargetType
> = z.union([
  z.nativeEnum(RefundTargetType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RefundTargetType$ {
  /** @deprecated use `RefundTargetType$inboundSchema` instead. */
  export const inboundSchema = RefundTargetType$inboundSchema;
  /** @deprecated use `RefundTargetType$outboundSchema` instead. */
  export const outboundSchema = RefundTargetType$outboundSchema;
}
