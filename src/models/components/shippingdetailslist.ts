/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ShippingDetails,
  ShippingDetails$inboundSchema,
  ShippingDetails$Outbound,
  ShippingDetails$outboundSchema,
} from "./shippingdetails.js";

export type ShippingDetailsList = {
  /**
   * A list of items returned for this request.
   */
  items: Array<ShippingDetails>;
};

/** @internal */
export const ShippingDetailsList$inboundSchema: z.ZodType<
  ShippingDetailsList,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(ShippingDetails$inboundSchema),
});

/** @internal */
export type ShippingDetailsList$Outbound = {
  items: Array<ShippingDetails$Outbound>;
};

/** @internal */
export const ShippingDetailsList$outboundSchema: z.ZodType<
  ShippingDetailsList$Outbound,
  z.ZodTypeDef,
  ShippingDetailsList
> = z.object({
  items: z.array(ShippingDetails$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ShippingDetailsList$ {
  /** @deprecated use `ShippingDetailsList$inboundSchema` instead. */
  export const inboundSchema = ShippingDetailsList$inboundSchema;
  /** @deprecated use `ShippingDetailsList$outboundSchema` instead. */
  export const outboundSchema = ShippingDetailsList$outboundSchema;
  /** @deprecated use `ShippingDetailsList$Outbound` instead. */
  export type Outbound = ShippingDetailsList$Outbound;
}

export function shippingDetailsListToJSON(
  shippingDetailsList: ShippingDetailsList,
): string {
  return JSON.stringify(
    ShippingDetailsList$outboundSchema.parse(shippingDetailsList),
  );
}

export function shippingDetailsListFromJSON(
  jsonString: string,
): SafeParseResult<ShippingDetailsList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ShippingDetailsList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ShippingDetailsList' from JSON`,
  );
}
