import crypto from "crypto"

/**
 * Verifies a webhook signature
 *
 * @param payload The payload that was sent in the webhook
 * @param secret The secret that was used to sign the webhook
 * @param signatureHeader The header that contains the signature
 * @param timestampHeader The header that contains the timestamp
 * @param timestampTolerance The tolerance for the timestamp
 */
export const verifyWebhook = (
  payload: string,
  secret: string,
  signatureHeader: string | null | undefined,
  timestampHeader: string | null | undefined,
  timestampTolerance: number
): void => {
  if (!signatureHeader || !timestampHeader) {
    throw new Error("Missing header values")
  }

  const timestamp = parseInt(timestampHeader, 10)
  if (isNaN(timestamp)) {
    throw new Error("Invalid header timestamp")
  }

  const signatures = signatureHeader.split(",")
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${timestamp}.${payload}`)
    .digest("hex")

  // Compare in constant time, so the check doesn't leak how much of one matched.
  const expected = Buffer.from(expectedSignature)
  const matches = (signature: string) => {
    const candidate = Buffer.from(signature)
    return candidate.length === expected.length && crypto.timingSafeEqual(candidate, expected)
  }
  if (!signatures.some(matches)) {
    throw new Error("No matching signature found")
  }

  if (
    timestampTolerance &&
    timestamp < Date.now() / 1000 - timestampTolerance
  ) {
    throw new Error("Timestamp too old")
  }
}
