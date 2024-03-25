import keyto from "@trust/keyto";
import { jwkThumbprintByEncoding } from "jwk-thumbprint";

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
  const jwk = keyto.from(privateKey, "pem").toJwk("private");

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
