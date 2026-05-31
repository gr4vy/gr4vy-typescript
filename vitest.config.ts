import { defineConfig } from "vitest/config";

// E2E suites talk to the real sandbox at api.sandbox.e2e.gr4vy.app. Each test
// file provisions its own merchant account (see tests/utils/setup.ts), so files
// are fully isolated and safe to run in parallel across worker threads. CI shards
// the files across jobs with `vitest run --shard=$i/$n`.
export default defineConfig({
  test: {
    // Run test files concurrently across worker threads. Tests *within* a file
    // still run sequentially, which keeps each file's merchant-scoped flow ordered.
    fileParallelism: true,
    // Network calls to a shared sandbox occasionally blip; a couple of retries
    // keeps the auto-merge SDK-regen pipeline from flaking on transient errors.
    retry: 2,
    // Generous timeouts for the real network + eventually-consistent endpoints
    // (capture settling, report execution). Mirrors the CI invocation flags.
    testTimeout: 30_000,
    hookTimeout: 30_000,
    // Keep the offline unit tests (auth, webhook) and the live E2E suites together.
    include: ["tests/**/*.test.{ts,js}"],
  },
});
