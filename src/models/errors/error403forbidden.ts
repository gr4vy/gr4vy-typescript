/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type Error403ForbiddenData = {
  /**
   * Always `error`.
   */
  type?: "error";
  /**
   * Always `forbidden`
   */
  code?: string;
  /**
   * Always `403`.
   */
  status?: number;
  /**
   * A human readable message that provides more context to the error.
   */
  message: string | null;
  /**
   * A list of details that further ellaborate on the error.
   */
  details?: Array<components.ErrorDetail> | undefined;
};

export class Error403Forbidden extends Error {
  /**
   * Always `error`.
   */
  type?: "error";
  /**
   * Always `forbidden`
   */
  code?: string;
  /**
   * Always `403`.
   */
  status?: number;
  /**
   * A list of details that further ellaborate on the error.
   */
  details?: Array<components.ErrorDetail> | undefined;

  /** The original data that was passed to this error instance. */
  data$: Error403ForbiddenData;

  constructor(err: Error403ForbiddenData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.type != null) this.type = err.type;
    if (err.code != null) this.code = err.code;
    if (err.status != null) this.status = err.status;
    if (err.details != null) this.details = err.details;

    this.name = "Error403Forbidden";
  }
}

/** @internal */
export const Error403Forbidden$inboundSchema: z.ZodType<
  Error403Forbidden,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("error").default("error"),
  code: z.string().default("forbidden"),
  status: z.number().int().default(403),
  message: z.nullable(z.string()),
  details: z.array(components.ErrorDetail$inboundSchema).optional(),
})
  .transform((v) => {
    return new Error403Forbidden(v);
  });

/** @internal */
export type Error403Forbidden$Outbound = {
  type?: "error";
  code?: string;
  status?: number;
  message: string | null;
  details?: Array<components.ErrorDetail$Outbound> | undefined;
};

/** @internal */
export const Error403Forbidden$outboundSchema: z.ZodType<
  Error403Forbidden$Outbound,
  z.ZodTypeDef,
  Error403Forbidden
> = z.instanceof(Error403Forbidden)
  .transform(v => v.data$)
  .pipe(z.object({
    type: z.literal("error").default("error" as const),
    code: z.string().default("forbidden"),
    status: z.number().int().default(403),
    message: z.nullable(z.string()),
    details: z.array(components.ErrorDetail$outboundSchema).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Error403Forbidden$ {
  /** @deprecated use `Error403Forbidden$inboundSchema` instead. */
  export const inboundSchema = Error403Forbidden$inboundSchema;
  /** @deprecated use `Error403Forbidden$outboundSchema` instead. */
  export const outboundSchema = Error403Forbidden$outboundSchema;
  /** @deprecated use `Error403Forbidden$Outbound` instead. */
  export type Outbound = Error403Forbidden$Outbound;
}
