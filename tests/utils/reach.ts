import { Gr4vyError } from "../../src/models/errors";

/**
 * Assert that an operation *reaches the server* — the point being that the
 * endpoint-reach report counts operations by observed HTTP calls, so the value
 * of these tests is proving a well-formed request went out over the wire.
 *
 * Some operations cannot be driven to a 2xx in the mock-card sandbox (a
 * configured gift-card service, a PSP that supports incremental authorization),
 * so a clean 4xx is an acceptable outcome alongside a 2xx.
 *
 * A **5xx fails**: that means we sent something the API could not handle, which
 * is a real defect worth surfacing. A failure that never hit the wire (local
 * validation, serialization, connection refused) also fails — plain
 * `rejects.toThrow()` would silently accept those and prove nothing.
 */
export const reaches = async (
  action: () => Promise<unknown>,
  description: string
): Promise<void> => {
  try {
    await action();
    return; // reached + succeeded (2xx)
  } catch (error) {
    if (error instanceof Gr4vyError) {
      const { statusCode } = error;
      if (statusCode >= 500) {
        throw new Error(
          `[reach] ${description}: server error (${statusCode}): ${error.message}`
        );
      }
      // 4xx, or a response the SDK could not fully parse — either way the
      // endpoint was reached.
      return;
    }
    throw new Error(
      `[reach] ${description}: the call failed before reaching the server: ` +
        `${(error as Error)?.name} — ${(error as Error)?.message}`
    );
  }
};
