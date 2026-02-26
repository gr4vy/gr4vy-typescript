import { jwkThumbprintByEncoding } from "jwk-thumbprint";

/**
 * Decodes a base64 string into a Uint8Array.
 *
 * Supports browser (atob), Node.js (Buffer), and other JS runtimes.
 * Throws an error if no base64 decoder is available.
 *
 * @param base64 - The base64-encoded string to decode.
 * @returns Uint8Array containing the decoded bytes.
 */
export function decodeBase64(base64: string): Uint8Array {
  // Browser: use atob
  if (typeof atob === "function") {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  // Node.js: use Buffer
  const gt = globalThis as any;
  if (typeof gt === "object" && gt != null && typeof gt.Buffer === "function") {
    return gt.Buffer.from(base64, "base64");
  }

  // No decoder available
  throw new Error("No base64 decoder is available in this runtime");
}

/**
 * Converts a PEM-encoded PKCS#8 private key to a Uint8Array.
 *
 * Validates the PEM format and decodes the base64 content.
 * Throws an error if the input is not a string or missing required delimiters.
 *
 * @param privateKey - PEM-encoded PKCS#8 private key string.
 * @returns Uint8Array containing the decoded PKCS#8 key bytes.
 */
export function pemToPkcs8(privateKey: string): Uint8Array {
  if (
    typeof privateKey !== "string" ||
    !privateKey.includes("-----BEGIN PRIVATE KEY-----") ||
    !privateKey.includes("-----END PRIVATE KEY-----")
  ) {
    throw new Error(
      "Invalid PEM format: missing 'BEGIN PRIVATE KEY' or 'END PRIVATE KEY' markers.",
    );
  }

  // Remove PEM delimiters and whitespace
  const cleaned = privateKey
    .replace(/-----BEGIN PRIVATE KEY-----/g, "")
    .replace(/-----END PRIVATE KEY-----/g, "")
    .replace(/\s+/g, "");

  return decodeBase64(cleaned);
}

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
 * Calculate the Key ID
 */
export async function getKeyId(privateKey: string): Promise<string> {
  if (typeof crypto === "undefined" || crypto.subtle == null) {
    throw new Error("WebCrypto API is not available in this runtime");
  }

  const keyData = pemToPkcs8(privateKey);
  const algorithm = { name: "ECDSA", namedCurve: "P-521" };

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    keyData,
    algorithm,
    true,
    ["sign"],
  );
  const jwk = await crypto.subtle.exportKey("jwk", cryptoKey);

  const keyid = jwkThumbprintByEncoding(
    stripUndefined(jwk),
    "SHA-256",
    "base64url",
  );
  if (keyid == null) {
    throw new Error("Failed to generate jwk thumbprint");
  }

  return keyid;
}

export function stripUndefined<T extends {}>(
  obj: T,
): { [K in keyof T]?: Exclude<T[K], undefined> } {
  const newObj: { [K in keyof T]?: Exclude<T[K], undefined> } = {};
  const target: Record<string, unknown> = newObj;

  for (const entry of Object.entries(obj)) {
    const [key, value] = entry;

    if (typeof value !== "undefined") {
      target[key] = value;
    }
  }

  return newObj;
}
