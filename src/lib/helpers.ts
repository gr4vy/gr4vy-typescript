import { jwkThumbprintByEncoding } from "jwk-thumbprint";

/**
 * JWT signing algorithms supported by SDK token helpers.
 *
 * Only SHA-512 variants are supported:
 * - ES512 for EC keys (P-521)
 * - RS512 for RSA keys
 */
export type JwtSigningAlgorithm = "ES512" | "RS512";

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
      "Invalid PEM format for private key. This function only accepts PKCS#8 keys with 'BEGIN PRIVATE KEY' and 'END PRIVATE KEY' markers. Other PEM formats such as 'BEGIN RSA PRIVATE KEY' (PKCS#1) or 'BEGIN EC PRIVATE KEY' (SEC1) are not supported.",
    );
  }

  // Remove PEM delimiters and whitespace
  const cleaned = privateKey
    .replace(/-----BEGIN PRIVATE KEY-----/g, "")
    .replace(/-----END PRIVATE KEY-----/g, "")
    .replace(/\s+/g, "");

  return decodeBase64(cleaned);
}

const RSA_ENCRYPTION_OID = "1.2.840.113549.1.1.1";
const EC_PUBLIC_KEY_OID = "1.2.840.10045.2.1";

function readDerLength(data: Uint8Array, offset: number) {
  if (offset >= data.length) {
    throw new Error("Invalid PKCS#8 key format");
  }

  const first = data[offset]!;
  if ((first & 0x80) === 0) {
    return { length: first, bytesRead: 1 };
  }

  const byteCount = first & 0x7f;
  if (byteCount === 0 || offset + 1 + byteCount > data.length) {
    throw new Error("Invalid PKCS#8 key format");
  }

  let length = 0;
  for (let index = 0; index < byteCount; index++) {
    length = (length << 8) | data[offset + 1 + index]!;
  }

  return { length, bytesRead: 1 + byteCount };
}

function readDerElement(data: Uint8Array, offset: number, expectedTag?: number) {
  if (offset + 1 >= data.length) {
    throw new Error("Invalid PKCS#8 key format");
  }

  const tag = data[offset];
  if (typeof expectedTag === "number" && tag !== expectedTag) {
    throw new Error("Invalid PKCS#8 key format");
  }

  const { length, bytesRead } = readDerLength(data, offset + 1);
  const valueStart = offset + 1 + bytesRead;
  const valueEnd = valueStart + length;

  if (valueEnd > data.length) {
    throw new Error("Invalid PKCS#8 key format");
  }

  return {
    valueStart,
    valueEnd,
    nextOffset: valueEnd,
  };
}

function decodeOid(oidBytes: Uint8Array): string {
  if (oidBytes.length === 0) {
    throw new Error("Invalid PKCS#8 key format");
  }

  const first = oidBytes[0]!;
  const arcs: number[] = [Math.floor(first / 40), first % 40];
  let value = 0;

  for (let index = 1; index < oidBytes.length; index++) {
    const byte = oidBytes[index]!;
    value = (value << 7) | (byte & 0x7f);

    if ((byte & 0x80) === 0) {
      arcs.push(value);
      value = 0;
    }
  }

  if (value !== 0) {
    throw new Error("Invalid PKCS#8 key format");
  }

  return arcs.join(".");
}

export function detectJwtSigningAlgorithm(
  privateKey: string,
): JwtSigningAlgorithm {
  /**
   * PKCS#8 keys are wrapped in an ASN.1 PrivateKeyInfo structure.
   *
   * `BEGIN PRIVATE KEY` is not enough to identify RSA vs EC since both can use
   * that same PEM label. We therefore read the algorithm OID from DER:
   * - 1.2.840.113549.1.1.1 => RSA => RS512
   * - 1.2.840.10045.2.1    => EC  => ES512
   */
  const keyData = pemToPkcs8(privateKey);
  const topSequence = readDerElement(keyData, 0, 0x30);

  let cursor = topSequence.valueStart;
  const version = readDerElement(keyData, cursor, 0x02);
  cursor = version.nextOffset;

  const algorithmIdentifier = readDerElement(keyData, cursor, 0x30);
  const oid = readDerElement(keyData, algorithmIdentifier.valueStart, 0x06);
  const oidString = decodeOid(keyData.slice(oid.valueStart, oid.valueEnd));

  if (oidString === RSA_ENCRYPTION_OID) {
    return "RS512";
  }

  if (oidString === EC_PUBLIC_KEY_OID) {
    return "ES512";
  }

  throw new Error("Unsupported key type. Only ECDSA and RSA are supported.");
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
 * Calculates a JWK thumbprint-based `kid` for a private key.
 *
 * The caller passes `jwtAlgorithm` so algorithm detection happens once at the
 * call site and both signing and key import stay consistent.
 *
 * @param privateKey - PEM-encoded PKCS#8 private key (`BEGIN PRIVATE KEY`).
 * @param jwtAlgorithm - Previously detected JWT algorithm (`ES512` or `RS512`).
 * @returns A base64url-encoded key ID value.
 */
export async function getKeyId(
  privateKey: string,
  jwtAlgorithm: JwtSigningAlgorithm,
): Promise<string> {
  if (typeof crypto === "undefined" || crypto.subtle == null) {
    throw new Error("WebCrypto API is not available in this runtime");
  }

  const keyData = pemToPkcs8(privateKey).buffer as ArrayBuffer;

  const algorithm =
    jwtAlgorithm === "RS512"
      ? { name: "RSASSA-PKCS1-v1_5", hash: "SHA-512" as const }
      : { name: "ECDSA", namedCurve: "P-521" as const };

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
