/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Report,
  Report$inboundSchema,
  Report$Outbound,
  Report$outboundSchema,
} from "./report.js";

export type Reports = {
  /**
   * A list of items returned for this request.
   */
  items: Array<Report>;
  /**
   * The number of items for this page.
   */
  limit?: number | undefined;
  /**
   * The cursor pointing at the next page of items.
   */
  nextCursor?: string | null | undefined;
  /**
   * The cursor pointing at the previous page of items.
   */
  previousCursor?: string | null | undefined;
};

/** @internal */
export const Reports$inboundSchema: z.ZodType<Reports, z.ZodTypeDef, unknown> =
  z.object({
    items: z.array(Report$inboundSchema),
    limit: z.number().int().default(20),
    next_cursor: z.nullable(z.string()).optional(),
    previous_cursor: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "next_cursor": "nextCursor",
      "previous_cursor": "previousCursor",
    });
  });

/** @internal */
export type Reports$Outbound = {
  items: Array<Report$Outbound>;
  limit: number;
  next_cursor?: string | null | undefined;
  previous_cursor?: string | null | undefined;
};

/** @internal */
export const Reports$outboundSchema: z.ZodType<
  Reports$Outbound,
  z.ZodTypeDef,
  Reports
> = z.object({
  items: z.array(Report$outboundSchema),
  limit: z.number().int().default(20),
  nextCursor: z.nullable(z.string()).optional(),
  previousCursor: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    nextCursor: "next_cursor",
    previousCursor: "previous_cursor",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Reports$ {
  /** @deprecated use `Reports$inboundSchema` instead. */
  export const inboundSchema = Reports$inboundSchema;
  /** @deprecated use `Reports$outboundSchema` instead. */
  export const outboundSchema = Reports$outboundSchema;
  /** @deprecated use `Reports$Outbound` instead. */
  export type Outbound = Reports$Outbound;
}

export function reportsToJSON(reports: Reports): string {
  return JSON.stringify(Reports$outboundSchema.parse(reports));
}

export function reportsFromJSON(
  jsonString: string,
): SafeParseResult<Reports, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Reports$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Reports' from JSON`,
  );
}
