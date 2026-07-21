import type { StringValue } from "ms";
import { getToken, JWTScope } from "../lib/auth.js";
import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

/**
 * Shape of the custom `bearerAuth` security value declared by the
 * `x-speakeasy-custom-security-scheme` extension (see
 * `.speakeasy/overlays/security-custom-scheme.yaml`). Speakeasy generates the
 * constructor input from that JSON Schema and hands the resolved value to hooks
 * via `hookCtx.securitySource`.
 */
export type Gr4vyTokenSecurity = {
  privateKey: string;
  scopes?: (JWTScope | string)[];
  expiresIn?: string;
};

function isTokenSecurity(value: unknown): value is Gr4vyTokenSecurity {
  return (
    typeof value === "object" &&
    value !== null &&
    "privateKey" in value &&
    typeof (value as { privateKey: unknown }).privateKey === "string"
  );
}

/**
 * Signs a fresh ES512 JWT from the caller's private key and attaches it as the
 * `Authorization: Bearer <jwt>` header on every outgoing request.
 *
 * This replaces the hand-rolled `withToken({ privateKey })` security source: the
 * private key is now a native, spec-declared SDK constructor input and the token
 * is minted here, in a Speakeasy-supported hook that survives regeneration.
 *
 * The hook is a deliberate no-op when the security source is not a
 * `{ privateKey }` object, so it stays harmless under the current bearer-string
 * setup until the custom-security-scheme overlay is generated in.
 */
export class TokenHook implements BeforeRequestHook {
  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    let source: unknown = hookCtx.securitySource;
    if (typeof source === "function") {
      source = await source();
    }

    if (!isTokenSecurity(source)) {
      return request;
    }

    const { privateKey, scopes, expiresIn } = source;
    const token = await getToken({
      privateKey,
      ...(scopes ? { scopes } : {}),
      ...(expiresIn ? { expiresIn: expiresIn as StringValue } : {}),
    });

    request.headers.set("Authorization", `Bearer ${token}`);
    return request;
  }
}
