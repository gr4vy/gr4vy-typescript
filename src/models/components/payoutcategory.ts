/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const PayoutCategory = {
  OnlineGambling: "online_gambling",
} as const;
export type PayoutCategory = OpenEnum<typeof PayoutCategory>;

/** @internal */
export const PayoutCategory$inboundSchema: z.ZodType<
  PayoutCategory,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(PayoutCategory),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const PayoutCategory$outboundSchema: z.ZodType<
  PayoutCategory,
  z.ZodTypeDef,
  PayoutCategory
> = z.union([
  z.nativeEnum(PayoutCategory),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PayoutCategory$ {
  /** @deprecated use `PayoutCategory$inboundSchema` instead. */
  export const inboundSchema = PayoutCategory$inboundSchema;
  /** @deprecated use `PayoutCategory$outboundSchema` instead. */
  export const outboundSchema = PayoutCategory$outboundSchema;
}
