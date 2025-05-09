/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaymentServiceToken,
  PaymentServiceToken$inboundSchema,
  PaymentServiceToken$Outbound,
  PaymentServiceToken$outboundSchema,
} from "./paymentservicetoken.js";

export type CollectionNoCursorPaymentServiceToken = {
  /**
   * A list of items returned for this request.
   */
  items: Array<PaymentServiceToken>;
};

/** @internal */
export const CollectionNoCursorPaymentServiceToken$inboundSchema: z.ZodType<
  CollectionNoCursorPaymentServiceToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(PaymentServiceToken$inboundSchema),
});

/** @internal */
export type CollectionNoCursorPaymentServiceToken$Outbound = {
  items: Array<PaymentServiceToken$Outbound>;
};

/** @internal */
export const CollectionNoCursorPaymentServiceToken$outboundSchema: z.ZodType<
  CollectionNoCursorPaymentServiceToken$Outbound,
  z.ZodTypeDef,
  CollectionNoCursorPaymentServiceToken
> = z.object({
  items: z.array(PaymentServiceToken$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CollectionNoCursorPaymentServiceToken$ {
  /** @deprecated use `CollectionNoCursorPaymentServiceToken$inboundSchema` instead. */
  export const inboundSchema =
    CollectionNoCursorPaymentServiceToken$inboundSchema;
  /** @deprecated use `CollectionNoCursorPaymentServiceToken$outboundSchema` instead. */
  export const outboundSchema =
    CollectionNoCursorPaymentServiceToken$outboundSchema;
  /** @deprecated use `CollectionNoCursorPaymentServiceToken$Outbound` instead. */
  export type Outbound = CollectionNoCursorPaymentServiceToken$Outbound;
}

export function collectionNoCursorPaymentServiceTokenToJSON(
  collectionNoCursorPaymentServiceToken: CollectionNoCursorPaymentServiceToken,
): string {
  return JSON.stringify(
    CollectionNoCursorPaymentServiceToken$outboundSchema.parse(
      collectionNoCursorPaymentServiceToken,
    ),
  );
}

export function collectionNoCursorPaymentServiceTokenFromJSON(
  jsonString: string,
): SafeParseResult<CollectionNoCursorPaymentServiceToken, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CollectionNoCursorPaymentServiceToken$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CollectionNoCursorPaymentServiceToken' from JSON`,
  );
}
