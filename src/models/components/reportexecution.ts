/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ReportExecutionContext,
  ReportExecutionContext$inboundSchema,
  ReportExecutionContext$Outbound,
  ReportExecutionContext$outboundSchema,
} from "./reportexecutioncontext.js";
import {
  ReportExecutionStatus,
  ReportExecutionStatus$inboundSchema,
  ReportExecutionStatus$outboundSchema,
} from "./reportexecutionstatus.js";
import {
  ReportSummary,
  ReportSummary$inboundSchema,
  ReportSummary$Outbound,
  ReportSummary$outboundSchema,
} from "./reportsummary.js";

export type ReportExecution = {
  /**
   * Always `report-execution`.
   */
  type?: "report-execution" | undefined;
  /**
   * The unique ID for the report execution.
   */
  id: string;
  /**
   * The date this report execution was created at.
   */
  createdAt: Date;
  /**
   * The date this report execution was last updated.
   */
  updatedAt: Date;
  status: ReportExecutionStatus;
  context: ReportExecutionContext;
  report: ReportSummary;
};

/** @internal */
export const ReportExecution$inboundSchema: z.ZodType<
  ReportExecution,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("report-execution").default("report-execution"),
  id: z.string(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  status: ReportExecutionStatus$inboundSchema,
  context: ReportExecutionContext$inboundSchema,
  report: ReportSummary$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type ReportExecution$Outbound = {
  type: "report-execution";
  id: string;
  created_at: string;
  updated_at: string;
  status: string;
  context: ReportExecutionContext$Outbound;
  report: ReportSummary$Outbound;
};

/** @internal */
export const ReportExecution$outboundSchema: z.ZodType<
  ReportExecution$Outbound,
  z.ZodTypeDef,
  ReportExecution
> = z.object({
  type: z.literal("report-execution").default("report-execution" as const),
  id: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
  status: ReportExecutionStatus$outboundSchema,
  context: ReportExecutionContext$outboundSchema,
  report: ReportSummary$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReportExecution$ {
  /** @deprecated use `ReportExecution$inboundSchema` instead. */
  export const inboundSchema = ReportExecution$inboundSchema;
  /** @deprecated use `ReportExecution$outboundSchema` instead. */
  export const outboundSchema = ReportExecution$outboundSchema;
  /** @deprecated use `ReportExecution$Outbound` instead. */
  export type Outbound = ReportExecution$Outbound;
}

export function reportExecutionToJSON(
  reportExecution: ReportExecution,
): string {
  return JSON.stringify(ReportExecution$outboundSchema.parse(reportExecution));
}

export function reportExecutionFromJSON(
  jsonString: string,
): SafeParseResult<ReportExecution, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReportExecution$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReportExecution' from JSON`,
  );
}
