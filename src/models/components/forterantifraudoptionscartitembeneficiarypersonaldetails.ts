/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails = {
  /**
   * First name of the beneficiary.
   */
  firstName?: string | null | undefined;
  /**
   * Last name of the beneficiary.
   */
  lastName?: string | null | undefined;
  /**
   * Email address of the beneficiary.
   */
  email?: string | null | undefined;
};

/** @internal */
export const ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$inboundSchema:
  z.ZodType<
    ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails,
    z.ZodTypeDef,
    unknown
  > = z.object({
    first_name: z.nullable(z.string()).optional(),
    last_name: z.nullable(z.string()).optional(),
    email: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "first_name": "firstName",
      "last_name": "lastName",
    });
  });

/** @internal */
export type ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$Outbound =
  {
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    email?: string | null | undefined;
  };

/** @internal */
export const ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$outboundSchema:
  z.ZodType<
    ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$Outbound,
    z.ZodTypeDef,
    ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails
  > = z.object({
    firstName: z.nullable(z.string()).optional(),
    lastName: z.nullable(z.string()).optional(),
    email: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      firstName: "first_name",
      lastName: "last_name",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$ {
  /** @deprecated use `ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$inboundSchema` instead. */
  export const inboundSchema =
    ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$inboundSchema;
  /** @deprecated use `ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$outboundSchema` instead. */
  export const outboundSchema =
    ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$outboundSchema;
  /** @deprecated use `ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$Outbound` instead. */
  export type Outbound =
    ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$Outbound;
}

export function forterAntiFraudOptionsCartItemBeneficiaryPersonalDetailsToJSON(
  forterAntiFraudOptionsCartItemBeneficiaryPersonalDetails:
    ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails,
): string {
  return JSON.stringify(
    ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$outboundSchema
      .parse(forterAntiFraudOptionsCartItemBeneficiaryPersonalDetails),
  );
}

export function forterAntiFraudOptionsCartItemBeneficiaryPersonalDetailsFromJSON(
  jsonString: string,
): SafeParseResult<
  ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'ForterAntiFraudOptionsCartItemBeneficiaryPersonalDetails' from JSON`,
  );
}
