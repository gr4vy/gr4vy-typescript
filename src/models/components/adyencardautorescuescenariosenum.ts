/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const AdyenCardAutoRescueScenariosEnum = {
  AutoRescueSuccessfulFirst: "AutoRescueSuccessfulFirst",
  AutoRescueSuccessfulSecond: "AutoRescueSuccessfulSecond",
  AutoRescueFailed: "AutoRescueFailed",
  AutoRescueFraud: "AutoRescueFraud",
} as const;
export type AdyenCardAutoRescueScenariosEnum = OpenEnum<
  typeof AdyenCardAutoRescueScenariosEnum
>;

/** @internal */
export const AdyenCardAutoRescueScenariosEnum$inboundSchema: z.ZodType<
  AdyenCardAutoRescueScenariosEnum,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AdyenCardAutoRescueScenariosEnum),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AdyenCardAutoRescueScenariosEnum$outboundSchema: z.ZodType<
  AdyenCardAutoRescueScenariosEnum,
  z.ZodTypeDef,
  AdyenCardAutoRescueScenariosEnum
> = z.union([
  z.nativeEnum(AdyenCardAutoRescueScenariosEnum),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AdyenCardAutoRescueScenariosEnum$ {
  /** @deprecated use `AdyenCardAutoRescueScenariosEnum$inboundSchema` instead. */
  export const inboundSchema = AdyenCardAutoRescueScenariosEnum$inboundSchema;
  /** @deprecated use `AdyenCardAutoRescueScenariosEnum$outboundSchema` instead. */
  export const outboundSchema = AdyenCardAutoRescueScenariosEnum$outboundSchema;
}
