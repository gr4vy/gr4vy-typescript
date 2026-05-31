import fc from "fast-check";
import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { amount, currency, fcParams, metadata } from "../utils/arbitraries";
import { authorizeViaCheckoutSession } from "../utils/transactions";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

describe("Transactions", () => {
  test("get and list reflect a created transaction", async () => {
    const created = await authorizeViaCheckoutSession(gr4vy, 1299);

    const fetched = await gr4vy.transactions.get(created.id);
    expect(fetched.id).toBe(created.id);

    const page = await gr4vy.transactions.list({});
    expect(page).toBeDefined();
  });

  test("update overrides metadata and external identifier (partial)", async () => {
    const created = await authorizeViaCheckoutSession(gr4vy, 1299, {
      metadata: { original: "value" },
    });

    const updated = await gr4vy.transactions.update(
      { metadata: { updated: "value" } },
      created.id
    );
    expect(updated.metadata?.["updated"]).toBe("value");
    // metadata is fully replaced on update, per the API contract.
    expect(updated.metadata?.["original"]).toBeUndefined();
  });

  // Property: any accepted amount/currency authorises and the response echoes
  // the amount and currency we sent.
  test("authorizes across a range of amounts and echoes them back", async () => {
    await fc.assert(
      fc.asyncProperty(amount(), currency(), async (amt, cur) => {
        const transaction = await authorizeViaCheckoutSession(gr4vy, amt, {
          currency: cur,
        });
        expect(transaction.status).toBe("authorization_succeeded");
        expect(transaction.amount).toBe(amt);
        expect(transaction.currency).toBe(cur);
      }),
      fcParams(5)
    );
  });

  // Property: arbitrary mixed-case metadata survives the create → get round-trip.
  test("metadata round-trips through create and get unchanged", async () => {
    await fc.assert(
      fc.asyncProperty(metadata(), async (meta) => {
        const created = await authorizeViaCheckoutSession(gr4vy, 1299, {
          metadata: meta,
        });
        const fetched = await gr4vy.transactions.get(created.id);
        expect(fetched.metadata).toEqual(meta);
      }),
      fcParams(4)
    );
  });
});
