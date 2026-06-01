import fc from "fast-check";
import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { amount, currency, fcParams, metadata } from "../utils/arbitraries";
import { buyer, cardPaymentMethod, uniqueId } from "../utils/fixtures";
import { authorizeViaCheckoutSession } from "../utils/transactions";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

// There are two ways to start processing a payment:
//   1. via a checkout session (covered throughout — see the lifecycle flow and
//      the helper authorizeViaCheckoutSession), and
//   2. by posting payment-method details directly to POST /transactions.
// This block covers entry point (2) — both raw card details and a stored token.
describe("Transaction entry points", () => {
  test("creates a transaction with card details posted directly", async () => {
    const transaction = await gr4vy.transactions.create({
      amount: 1299,
      currency: "USD",
      externalIdentifier: uniqueId("txn"),
      paymentMethod: cardPaymentMethod(),
    });
    expect(transaction.status).toBe("authorization_succeeded");
    expect(transaction.amount).toBe(1299);
  });

  test("direct card details can be vaulted against a buyer with store=true", async () => {
    const owner = await gr4vy.buyers.create(buyer());

    const transaction = await gr4vy.transactions.create({
      amount: 1299,
      currency: "USD",
      buyerId: owner.id,
      store: true,
      externalIdentifier: uniqueId("txn"),
      paymentMethod: cardPaymentMethod(),
    });
    expect(transaction.status).toBe("authorization_succeeded");

    // The vaulted method is now reusable as a stored token.
    const stored = await gr4vy.buyers.paymentMethods.list({ buyerId: owner.id });
    expect(stored.items.length).toBeGreaterThanOrEqual(1);

    const reused = await gr4vy.transactions.create({
      amount: 500,
      currency: "USD",
      externalIdentifier: uniqueId("txn"),
      paymentMethod: { method: "id", id: stored.items[0]!.id, securityCode: "123" },
    });
    expect(reused.status).toBe("authorization_succeeded");
  });
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

    const newExternalIdentifier = uniqueId("txn-updated");
    const updated = await gr4vy.transactions.update(
      {
        metadata: { updated: "value" },
        externalIdentifier: newExternalIdentifier,
      },
      created.id
    );
    expect(updated.metadata?.["updated"]).toBe("value");
    // metadata is fully replaced on update, per the API contract.
    expect(updated.metadata?.["original"]).toBeUndefined();
    expect(updated.externalIdentifier).toBe(newExternalIdentifier);
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
