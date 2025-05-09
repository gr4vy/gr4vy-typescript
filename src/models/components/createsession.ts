/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CreateSessionStatus,
  CreateSessionStatus$inboundSchema,
  CreateSessionStatus$outboundSchema,
} from "./createsessionstatus.js";

/**
 * The session data received from the payment service.
 */
export type CreateSession = {
  /**
   * Always `payment-service-session`.
   */
  type?: "payment-service-session" | undefined;
  status: CreateSessionStatus;
  /**
   * A generic error code that may be returned when the session could not be generated.
   */
  code?: string | null | undefined;
  /**
   * The HTTP status code received from the payment service.
   */
  statusCode?: number | null | undefined;
  /**
   * The JSON response body received from the payment service.
   */
  responseBody?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateSession$inboundSchema: z.ZodType<
  CreateSession,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("payment-service-session").default("payment-service-session"),
  status: CreateSessionStatus$inboundSchema,
  code: z.nullable(z.string()).optional(),
  status_code: z.nullable(z.number().int()).optional(),
  response_body: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "response_body": "responseBody",
  });
});

/** @internal */
export type CreateSession$Outbound = {
  type: "payment-service-session";
  status: string;
  code?: string | null | undefined;
  status_code?: number | null | undefined;
  response_body?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateSession$outboundSchema: z.ZodType<
  CreateSession$Outbound,
  z.ZodTypeDef,
  CreateSession
> = z.object({
  type: z.literal("payment-service-session").default(
    "payment-service-session" as const,
  ),
  status: CreateSessionStatus$outboundSchema,
  code: z.nullable(z.string()).optional(),
  statusCode: z.nullable(z.number().int()).optional(),
  responseBody: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
    responseBody: "response_body",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSession$ {
  /** @deprecated use `CreateSession$inboundSchema` instead. */
  export const inboundSchema = CreateSession$inboundSchema;
  /** @deprecated use `CreateSession$outboundSchema` instead. */
  export const outboundSchema = CreateSession$outboundSchema;
  /** @deprecated use `CreateSession$Outbound` instead. */
  export type Outbound = CreateSession$Outbound;
}

export function createSessionToJSON(createSession: CreateSession): string {
  return JSON.stringify(CreateSession$outboundSchema.parse(createSession));
}

export function createSessionFromJSON(
  jsonString: string,
): SafeParseResult<CreateSession, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSession$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSession' from JSON`,
  );
}
