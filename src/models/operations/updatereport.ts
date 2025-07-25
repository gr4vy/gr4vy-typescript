/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateReportGlobals = {
  merchantAccountId?: string | undefined;
};

export type UpdateReportRequest = {
  /**
   * The ID of the report to edit.
   */
  reportId: string;
  /**
   * The ID of the merchant account to use for this request.
   */
  merchantAccountId?: string | null | undefined;
  reportUpdate: components.ReportUpdate;
};

/** @internal */
export const UpdateReportGlobals$inboundSchema: z.ZodType<
  UpdateReportGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  merchantAccountId: z.string().optional(),
});

/** @internal */
export type UpdateReportGlobals$Outbound = {
  merchantAccountId?: string | undefined;
};

/** @internal */
export const UpdateReportGlobals$outboundSchema: z.ZodType<
  UpdateReportGlobals$Outbound,
  z.ZodTypeDef,
  UpdateReportGlobals
> = z.object({
  merchantAccountId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateReportGlobals$ {
  /** @deprecated use `UpdateReportGlobals$inboundSchema` instead. */
  export const inboundSchema = UpdateReportGlobals$inboundSchema;
  /** @deprecated use `UpdateReportGlobals$outboundSchema` instead. */
  export const outboundSchema = UpdateReportGlobals$outboundSchema;
  /** @deprecated use `UpdateReportGlobals$Outbound` instead. */
  export type Outbound = UpdateReportGlobals$Outbound;
}

export function updateReportGlobalsToJSON(
  updateReportGlobals: UpdateReportGlobals,
): string {
  return JSON.stringify(
    UpdateReportGlobals$outboundSchema.parse(updateReportGlobals),
  );
}

export function updateReportGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<UpdateReportGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateReportGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateReportGlobals' from JSON`,
  );
}

/** @internal */
export const UpdateReportRequest$inboundSchema: z.ZodType<
  UpdateReportRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  report_id: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
  ReportUpdate: components.ReportUpdate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "report_id": "reportId",
    "ReportUpdate": "reportUpdate",
  });
});

/** @internal */
export type UpdateReportRequest$Outbound = {
  report_id: string;
  merchantAccountId?: string | null | undefined;
  ReportUpdate: components.ReportUpdate$Outbound;
};

/** @internal */
export const UpdateReportRequest$outboundSchema: z.ZodType<
  UpdateReportRequest$Outbound,
  z.ZodTypeDef,
  UpdateReportRequest
> = z.object({
  reportId: z.string(),
  merchantAccountId: z.nullable(z.string()).optional(),
  reportUpdate: components.ReportUpdate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    reportId: "report_id",
    reportUpdate: "ReportUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateReportRequest$ {
  /** @deprecated use `UpdateReportRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateReportRequest$inboundSchema;
  /** @deprecated use `UpdateReportRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateReportRequest$outboundSchema;
  /** @deprecated use `UpdateReportRequest$Outbound` instead. */
  export type Outbound = UpdateReportRequest$Outbound;
}

export function updateReportRequestToJSON(
  updateReportRequest: UpdateReportRequest,
): string {
  return JSON.stringify(
    UpdateReportRequest$outboundSchema.parse(updateReportRequest),
  );
}

export function updateReportRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateReportRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateReportRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateReportRequest' from JSON`,
  );
}
