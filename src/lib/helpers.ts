import { bytesFromBase64 } from "./base64";

/**
 * Best-effort runtime identification used for SDK metadata/user-agent strings.
 *
 * The function prefers browser-style detection via `navigator.userAgent` and
 * falls back to Node.js `process.version` when available.
 *
 * @returns A runtime identifier string, or `"<unknown-runtime>"` when not detectable.
 */
export function getRuntime() {
  if (
    typeof navigator !== "undefined" &&
    typeof navigator.userAgent === "string"
  ) {
    return navigator.userAgent;
  }

  const gt: unknown = globalThis;
  if (
    typeof gt === "object" &&
    gt != null &&
    "process" in gt &&
    typeof gt.process === "object" &&
    gt.process != null &&
    "version" in gt.process &&
    typeof gt.process.version === "string"
  ) {
    return `Node.js/${gt.process.version}`;
  }

  return "<unknown-runtime>";
}

let cachedWebCrypto: Crypto | undefined;

/**
 * Resolves a Web Crypto implementation across supported runtimes.
 *
 * Resolution order:
 * 1. `globalThis.crypto` when already exposed by the runtime.
 * 2. Node.js fallback via `node:crypto`.webcrypto (important for some Node 18 setups).
 *
 * @returns A Web Crypto compatible `Crypto` object with `subtle` APIs.
 * @throws If no Web Crypto implementation is available.
 */
async function resolveWebCrypto(): Promise<Crypto> {
  // Browsers, Bun, Deno, and many Node setups expose crypto globally.
  if (globalThis.crypto?.subtle != null) {
    return globalThis.crypto;
  }

  // Reuse the resolved Node fallback to avoid repeated dynamic imports.
  if (cachedWebCrypto != null) {
    return cachedWebCrypto;
  }

  const gt: unknown = globalThis;
  const isNodeRuntime =
    typeof gt === "object" &&
    gt != null &&
    "process" in gt &&
    typeof gt.process === "object" &&
    gt.process != null &&
    "versions" in gt.process &&
    typeof gt.process.versions === "object" &&
    gt.process.versions != null &&
    "node" in gt.process.versions;

  // Avoid attempting to resolve `node:crypto` in non-Node runtimes.
  if (isNodeRuntime) {
    try {
      // Keep the specifier non-literal to avoid eager bundler resolution.
      const nodeCryptoSpecifier = `node${":"}crypto`;
      const nodeCrypto = await import(nodeCryptoSpecifier);
      if (nodeCrypto.webcrypto?.subtle != null) {
        cachedWebCrypto = nodeCrypto.webcrypto as unknown as Crypto;
        return cachedWebCrypto;
      }
    } catch {
      // Intentionally ignored. We'll throw a descriptive error below.
    }
  }

  throw new Error(
    "Web Crypto API is unavailable. Expected globalThis.crypto.subtle or Node's crypto.webcrypto."
  );
}

/**
 * Derives JWT `kid` from a private key using an RFC 7638 JWK thumbprint.
 *
 * Expected key format:
 * - PKCS#8 PEM-encoded private key
 * - EC P-521 curve (matches ES512 signing)
 *
 * Steps:
 * 1. Decode PEM to PKCS#8 DER bytes.
 * 2. Import key through Web Crypto.
 * 3. Export as JWK and validate required fields.
 * 4. Hash the canonical RFC 7638 thumbprint input with SHA-256.
 * 5. Return base64url encoded digest.
 *
 * @param privateKey PEM-encoded PKCS#8 EC private key.
 * @returns The base64url-encoded JWK thumbprint used as JWT `kid`.
 * @throws If key parsing/import/export/validation/digest fails.
 */
export async function getKeyId(privateKey: string): Promise<string> {
  try {
    const runtimeCrypto = await resolveWebCrypto();

    // Parse PEM to DER binary
    const pemBody = privateKey
      .replace(/-----BEGIN PRIVATE KEY-----/, "")
      .replace(/-----END PRIVATE KEY-----/, "")
      .replace(/\s/g, "");
    const der = bytesFromBase64(pemBody);

    // Import as extractable CryptoKey (ES512 = P-521)
    const key = await runtimeCrypto.subtle.importKey(
      "pkcs8",
      der,
      { name: "ECDSA", namedCurve: "P-521" },
      true,
      ["sign"]
    );

    // Export as JWK and validate fields required to build an RFC 7638 thumbprint.
    const jwk = await runtimeCrypto.subtle.exportKey("jwk", key);
    const requiredFields = ["kty", "crv", "x", "y"] as const;
    const invalidFields = requiredFields.filter((field) => {
      const value = jwk[field];
      return typeof value !== "string" || value.length === 0;
    });
    if (invalidFields.length > 0) {
      throw new Error(
        `Exported JWK is missing required string field(s): ${invalidFields.join(
          ", "
        )}`
      );
    }

    if (jwk.kty !== "EC" || jwk.crv !== "P-521") {
      throw new Error("Imported key is not an EC P-521 private key");
    }

    // RFC 7638 canonical member set for EC keys: crv, kty, x, y.
    const input = JSON.stringify({
      crv: jwk.crv,
      kty: jwk.kty,
      x: jwk.x,
      y: jwk.y,
    });
    const hash = await runtimeCrypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(input)
    );

    // Base64url encode
    return btoa(String.fromCharCode(...new Uint8Array(hash)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  } catch (error) {
    const reason =
      error instanceof Error && error.message
        ? ` Reason: ${error.message}`
        : "";
    throw new Error(
      "Failed to derive JWT key ID from private key. Expected a PKCS#8 PEM-encoded EC private key on curve P-521 (ES512)." +
        reason
    );
  }
}
