export interface PollOptions {
  /** Maximum total time to wait before giving up. Defaults to 20s. */
  timeoutMs?: number;
  /** Delay between attempts. Defaults to 1s. */
  intervalMs?: number;
  /** Label used in the timeout error message. */
  description?: string;
}

/**
 * Repeatedly calls `fetchFn` until `predicate` returns true, then resolves with
 * the last fetched value. Used for the eventually-consistent endpoints in the
 * lifecycle flows (a capture settling, a report execution finishing, a payout
 * status advancing) so tests don't race ahead of the backend. Bounded by
 * `timeoutMs` so a stuck state fails fast instead of hanging the worker.
 */
export const pollUntil = async <T>(
  fetchFn: () => Promise<T>,
  predicate: (value: T) => boolean,
  options: PollOptions = {}
): Promise<T> => {
  const { timeoutMs = 20_000, intervalMs = 1_000, description = "condition" } =
    options;
  const deadline = Date.now() + timeoutMs;
  let last: T;

  do {
    last = await fetchFn();
    if (predicate(last)) {
      return last;
    }
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  } while (Date.now() < deadline);

  throw new Error(
    `Timed out after ${timeoutMs}ms waiting for ${description}. Last value: ${JSON.stringify(
      last!
    )}`
  );
};
