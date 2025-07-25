/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const CaptureStatus = {
  Succeeded: "succeeded",
  Pending: "pending",
  Declined: "declined",
  Failed: "failed",
} as const;
export type CaptureStatus = OpenEnum<typeof CaptureStatus>;

/** @internal */
export const CaptureStatus$inboundSchema: z.ZodType<
  CaptureStatus,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CaptureStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CaptureStatus$outboundSchema: z.ZodType<
  CaptureStatus,
  z.ZodTypeDef,
  CaptureStatus
> = z.union([
  z.nativeEnum(CaptureStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CaptureStatus$ {
  /** @deprecated use `CaptureStatus$inboundSchema` instead. */
  export const inboundSchema = CaptureStatus$inboundSchema;
  /** @deprecated use `CaptureStatus$outboundSchema` instead. */
  export const outboundSchema = CaptureStatus$outboundSchema;
}
