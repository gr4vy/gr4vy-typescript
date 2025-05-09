/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const CVVResponseCode = {
  Match: "match",
  NoMatch: "no_match",
  Unavailable: "unavailable",
  NotProvided: "not_provided",
} as const;
export type CVVResponseCode = OpenEnum<typeof CVVResponseCode>;

/** @internal */
export const CVVResponseCode$inboundSchema: z.ZodType<
  CVVResponseCode,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CVVResponseCode),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CVVResponseCode$outboundSchema: z.ZodType<
  CVVResponseCode,
  z.ZodTypeDef,
  CVVResponseCode
> = z.union([
  z.nativeEnum(CVVResponseCode),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CVVResponseCode$ {
  /** @deprecated use `CVVResponseCode$inboundSchema` instead. */
  export const inboundSchema = CVVResponseCode$inboundSchema;
  /** @deprecated use `CVVResponseCode$outboundSchema` instead. */
  export const outboundSchema = CVVResponseCode$outboundSchema;
}
