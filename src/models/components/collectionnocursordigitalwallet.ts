/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DigitalWallet,
  DigitalWallet$inboundSchema,
  DigitalWallet$Outbound,
  DigitalWallet$outboundSchema,
} from "./digitalwallet.js";

export type CollectionNoCursorDigitalWallet = {
  /**
   * A list of items returned for this request.
   */
  items: Array<DigitalWallet>;
};

/** @internal */
export const CollectionNoCursorDigitalWallet$inboundSchema: z.ZodType<
  CollectionNoCursorDigitalWallet,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(DigitalWallet$inboundSchema),
});

/** @internal */
export type CollectionNoCursorDigitalWallet$Outbound = {
  items: Array<DigitalWallet$Outbound>;
};

/** @internal */
export const CollectionNoCursorDigitalWallet$outboundSchema: z.ZodType<
  CollectionNoCursorDigitalWallet$Outbound,
  z.ZodTypeDef,
  CollectionNoCursorDigitalWallet
> = z.object({
  items: z.array(DigitalWallet$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CollectionNoCursorDigitalWallet$ {
  /** @deprecated use `CollectionNoCursorDigitalWallet$inboundSchema` instead. */
  export const inboundSchema = CollectionNoCursorDigitalWallet$inboundSchema;
  /** @deprecated use `CollectionNoCursorDigitalWallet$outboundSchema` instead. */
  export const outboundSchema = CollectionNoCursorDigitalWallet$outboundSchema;
  /** @deprecated use `CollectionNoCursorDigitalWallet$Outbound` instead. */
  export type Outbound = CollectionNoCursorDigitalWallet$Outbound;
}

export function collectionNoCursorDigitalWalletToJSON(
  collectionNoCursorDigitalWallet: CollectionNoCursorDigitalWallet,
): string {
  return JSON.stringify(
    CollectionNoCursorDigitalWallet$outboundSchema.parse(
      collectionNoCursorDigitalWallet,
    ),
  );
}

export function collectionNoCursorDigitalWalletFromJSON(
  jsonString: string,
): SafeParseResult<CollectionNoCursorDigitalWallet, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CollectionNoCursorDigitalWallet$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CollectionNoCursorDigitalWallet' from JSON`,
  );
}
