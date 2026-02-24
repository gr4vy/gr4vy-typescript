import { jwkThumbprintByEncoding } from "jwk-thumbprint";

function decodeBase64(base64: string): Uint8Array {
  if (typeof atob === "function") {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);

    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }

    return bytes;
  }

  const gt: unknown = globalThis;
  if (
    typeof gt === "object" &&
    gt != null &&
    "Buffer" in gt &&
    typeof gt.Buffer === "function"
  ) {
    const bytes = gt.Buffer.from(base64, "base64") as Uint8Array;
    return new Uint8Array(bytes);
  }

  throw new Error("No base64 decoder is available in this runtime");
}

function pemToPkcs8(privateKey: string): Uint8Array {
  const cleaned = privateKey
    .replace(/-----BEGIN PRIVATE KEY-----/g, "")
    .replace(/-----END PRIVATE KEY-----/g, "")
    .replace(/\s+/g, "");

  return decodeBase64(cleaned);
}

/**
 * Detect key algorithm from PKCS#8 ASN.1 structure.
 * Looks for the algorithm OID in the key data.
 */
function detectKeyAlgorithm(keyData: Uint8Array): {
  name: string;
  namedCurve?: string;
  hash?: string;
} {
  // EC OID: 1.2.840.10045.2.1 (0x2A 0x86 0x48 0xCE 0x3D 0x02 0x01)
  // P-521 OID: 1.3.132.0.35 (0x2B 0x81 0x04 0x00 0x23)
  // P-256 OID: 1.2.840.10045.3.1.7 (0x2A 0x86 0x48 0xCE 0x3D 0x03 0x01 0x07)
  // P-384 OID: 1.3.132.0.34 (0x2B 0x81 0x04 0x00 0x22)
  
  // RSA OID: 1.2.840.113549.1.1.1 (0x2A 0x86 0x48 0x86 0xF7 0x0D 0x01 0x01 0x01)

  const ecOid = [0x2a, 0x86, 0x48, 0xce, 0x3d, 0x02, 0x01];
  const rsaOid = [0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01, 0x01];
  const p521Oid = [0x2b, 0x81, 0x04, 0x00, 0x23];
  const p384Oid = [0x2b, 0x81, 0x04, 0x00, 0x22];
  const p256Oid = [0x2a, 0x86, 0x48, 0xce, 0x3d, 0x03, 0x01, 0x07];

  const hasSequence = (haystack: Uint8Array, needle: number[]): boolean => {
    for (let index = 0; index <= haystack.length - needle.length; index += 1) {
      let match = true;
      for (let j = 0; j < needle.length; j += 1) {
        if (haystack[index + j] !== needle[j]) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
    return false;
  };

  // Check for EC first
  if (hasSequence(keyData, ecOid)) {
    if (hasSequence(keyData, p521Oid)) {
      return { name: "ECDSA", namedCurve: "P-521" };
    }
    if (hasSequence(keyData, p384Oid)) {
      return { name: "ECDSA", namedCurve: "P-384" };
    }
    if (hasSequence(keyData, p256Oid)) {
      return { name: "ECDSA", namedCurve: "P-256" };
    }
    // Default to P-256 if EC but unrecognized curve
    return { name: "ECDSA", namedCurve: "P-256" };
  }

  // Check for RSA
  if (hasSequence(keyData, rsaOid)) {
    return { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" };
  }

  // Default to RSA if unknown
  return { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" };
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
  const algorithm = detectKeyAlgorithm(keyData);
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    keyData,
    algorithm,
    true,
    ["sign"]
  );
  const jwk = await crypto.subtle.exportKey("jwk", cryptoKey);

  const keyid = jwkThumbprintByEncoding(
    stripUndefined(jwk),
    "SHA-256",
    "base64url"
  );
  if (keyid == null) {
    throw new Error("Failed to generate jwk thumbprint");
  }

  return keyid;
}

export function stripUndefined<T extends {}>(
  obj: T
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
