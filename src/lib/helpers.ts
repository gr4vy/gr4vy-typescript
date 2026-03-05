/**
 * Attempts to detect the JS runtime and its version based on available globals.
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

/**
 * Calculate the Key ID (JWK Thumbprint per RFC 7638)
 */
export async function getKeyId(privateKey: string): Promise<string> {
  try {
    // Parse PEM to DER binary
    const pemBody = privateKey
      .replace(/-----BEGIN PRIVATE KEY-----/, "")
      .replace(/-----END PRIVATE KEY-----/, "")
      .replace(/\s/g, "");
    const der = Uint8Array.from(atob(pemBody), (c) => c.charCodeAt(0));

    // Import as extractable CryptoKey (ES512 = P-521)
    const key = await crypto.subtle.importKey(
      "pkcs8",
      der,
      { name: "ECDSA", namedCurve: "P-521" },
      true,
      ["sign"]
    );

    // Export as JWK, compute RFC 7638 thumbprint
    const jwk = await crypto.subtle.exportKey("jwk", key);
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

    const input = JSON.stringify({
      crv: jwk.crv,
      kty: jwk.kty,
      x: jwk.x,
      y: jwk.y,
    });
    const hash = await crypto.subtle.digest(
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
