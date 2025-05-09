/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const CardType = {
  Credit: "credit",
  Debit: "debit",
  Prepaid: "prepaid",
} as const;
export type CardType = OpenEnum<typeof CardType>;

/** @internal */
export const CardType$inboundSchema: z.ZodType<
  CardType,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CardType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CardType$outboundSchema: z.ZodType<
  CardType,
  z.ZodTypeDef,
  CardType
> = z.union([
  z.nativeEnum(CardType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CardType$ {
  /** @deprecated use `CardType$inboundSchema` instead. */
  export const inboundSchema = CardType$inboundSchema;
  /** @deprecated use `CardType$outboundSchema` instead. */
  export const outboundSchema = CardType$outboundSchema;
}
