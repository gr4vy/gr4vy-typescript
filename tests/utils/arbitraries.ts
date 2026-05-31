import fc from "fast-check";
import { Address, BillingDetails, CartItem } from "../../src/models/components";

/**
 * Shared fast-check parameters for E2E property tests. `numRuns` is deliberately
 * small because every run is a real network round-trip — we want broad-ish input
 * coverage without blowing the CI time budget. The seed is fixed (overridable via
 * `FC_SEED`) so a failing case is reproducible from the CI logs.
 */
export const fcParams = <Ts = unknown>(numRuns = 5): fc.Parameters<Ts> => ({
  numRuns,
  seed: process.env["FC_SEED"] ? Number(process.env["FC_SEED"]) : 42,
});

/** Minor-unit amount the mock connector reliably authorises. */
export const amount = (): fc.Arbitrary<number> =>
  fc.integer({ min: 50, max: 100_000 });

/** Currencies the test merchant's `mock-card` service accepts. */
export const currency = (): fc.Arbitrary<string> => fc.constantFrom("USD");

/** Countries the test merchant's `mock-card` service accepts. */
export const country = (): fc.Arbitrary<string> => fc.constantFrom("US");

/**
 * Metadata maps mixing camelCase and snake_case keys, to exercise the
 * snakecase-keys serialisation boundary the way the auth/embed tests do. Values
 * are always strings to match the transaction metadata type.
 */
export const metadata = (): fc.Arbitrary<Record<string, string>> =>
  fc.dictionary(
    fc.oneof(
      fc.constantFrom("orderId", "campaign", "noteForOps"),
      fc.constantFrom("order_id", "campaign_ref", "internal_note")
    ),
    fc.string({ minLength: 1, maxLength: 40 }),
    { minKeys: 1, maxKeys: 4 }
  );

/** Human-ish names with the odd unicode/whitespace edge case. */
export const name = (): fc.Arbitrary<string> =>
  fc
    .string({ minLength: 1, maxLength: 30 })
    .filter((s) => s.trim().length > 0);

export const addressArb = (): fc.Arbitrary<Address> =>
  fc.record(
    {
      city: fc.constantFrom("London", "Paris", "Berlin", "San Francisco"),
      country: country(),
      postalCode: fc.constantFrom("94110", "10001", "SW1A 1AA"),
      state: fc.constantFrom("CA", "NY", "TX"),
      line1: fc.string({ minLength: 1, maxLength: 50 }),
      line2: fc.option(fc.string({ maxLength: 20 }), { nil: undefined }),
    },
    { requiredKeys: ["country", "line1"] }
  );

export const billingDetailsArb = (): fc.Arbitrary<BillingDetails> =>
  fc.record(
    {
      firstName: name(),
      lastName: name(),
      emailAddress: fc.emailAddress(),
      address: addressArb(),
    },
    { requiredKeys: ["firstName", "lastName"] }
  );

export const cartItemArb = (): fc.Arbitrary<CartItem> =>
  fc.record({
    name: name(),
    quantity: fc.integer({ min: 1, max: 5 }),
    unitAmount: fc.integer({ min: 1, max: 5_000 }),
  });
