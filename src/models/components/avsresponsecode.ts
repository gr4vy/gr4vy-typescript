/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const AVSResponseCode = {
  Match: "match",
  NoMatch: "no_match",
  PartialMatchAddress: "partial_match_address",
  PartialMatchPostcode: "partial_match_postcode",
  PartialMatchName: "partial_match_name",
  Unavailable: "unavailable",
} as const;
export type AVSResponseCode = OpenEnum<typeof AVSResponseCode>;

/** @internal */
export const AVSResponseCode$inboundSchema: z.ZodType<
  AVSResponseCode,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AVSResponseCode),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AVSResponseCode$outboundSchema: z.ZodType<
  AVSResponseCode,
  z.ZodTypeDef,
  AVSResponseCode
> = z.union([
  z.nativeEnum(AVSResponseCode),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AVSResponseCode$ {
  /** @deprecated use `AVSResponseCode$inboundSchema` instead. */
  export const inboundSchema = AVSResponseCode$inboundSchema;
  /** @deprecated use `AVSResponseCode$outboundSchema` instead. */
  export const outboundSchema = AVSResponseCode$outboundSchema;
}
