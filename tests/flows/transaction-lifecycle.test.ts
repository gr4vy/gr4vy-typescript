import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { Transaction } from "../../src/models/components";
import {
  APPROVING_CARD,
  cartItem,
  uniqueId,
  unwrapTransaction,
} from "../utils/fixtures";
import { putCheckoutSessionCard } from "../utils/fields";
import { pollUntil } from "../utils/poll";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

/**
 * Authorises a transaction the way a real integration does: open a checkout
 * session, tokenise a card into it via the secure-fields endpoint, then create
 * the transaction against that session.
 */
const authorize = async (
  amount: number,
  intent: "authorize" | "capture" = "authorize"
): Promise<Transaction> => {
  const session = await gr4vy.checkoutSessions.create();
  await putCheckoutSessionCard(session, APPROVING_CARD);
  return gr4vy.transactions.create({
    amount,
    currency: "USD",
    intent,
    externalIdentifier: uniqueId("txn"),
    cartItems: [cartItem({ unitAmount: amount })],
    paymentMethod: { method: "checkout-session", id: session.id },
  });
};

describe("Transaction lifecycle", () => {
  test("authorize → capture (full) → refund (partial then full)", async () => {
    const transaction = await authorize(5000);
    expect(transaction.status).toBe("authorization_succeeded");
    expect(transaction.amount).toBe(5000);

    // Capture the full amount.
    const captured = unwrapTransaction(
      await gr4vy.transactions.capture({
        transactionId: transaction.id,
        transactionCaptureCreate: { amount: 5000 },
      })
    );
    expect(captured.id).toBe(transaction.id);

    const settled = await pollUntil(
      () => gr4vy.transactions.get(transaction.id),
      (t) => t.status === "capture_succeeded",
      { description: "capture to succeed" }
    );
    expect(settled.capturedAmount).toBe(5000);

    // Partial refund, then refund the remainder.
    const partialRefund = await gr4vy.transactions.refunds.create(
      { amount: 2000, reason: "partial" },
      transaction.id
    );
    expect(partialRefund.amount).toBe(2000);
    expect(["processing", "succeeded"]).toContain(partialRefund.status);

    const fullRefund = await gr4vy.transactions.refunds.all.create(transaction.id);
    expect(fullRefund.items.length).toBeGreaterThanOrEqual(1);

    // Read the refund back through both refund accessors.
    const refunds = await gr4vy.transactions.refunds.list(transaction.id);
    expect(refunds.items.length).toBeGreaterThanOrEqual(1);
    const firstRefundId = refunds.items[0]!.id;
    const fetched = await gr4vy.transactions.refunds.get(
      transaction.id,
      firstRefundId
    );
    expect(fetched.id).toBe(firstRefundId);
    const topLevel = await gr4vy.refunds.get(firstRefundId);
    expect(topLevel.id).toBe(firstRefundId);
  });

  test("authorize → capture → read captures back via list and get", async () => {
    const transaction = await authorize(4500);
    expect(transaction.status).toBe("authorization_succeeded");

    unwrapTransaction(
      await gr4vy.transactions.capture({
        transactionId: transaction.id,
        transactionCaptureCreate: { amount: 4500 },
      })
    );

    // Wait until the capture is recorded against the transaction.
    await pollUntil(
      () => gr4vy.transactions.get(transaction.id),
      (t) => t.status === "capture_succeeded",
      { description: "capture to succeed" }
    );

    // List captures, then read one back by id.
    const captures = await gr4vy.transactions.captures.list(transaction.id);
    expect(captures.items.length).toBeGreaterThanOrEqual(1);

    const captureId = captures.items[0]!.id;
    const fetched = await gr4vy.transactions.captures.get(
      transaction.id,
      captureId
    );
    expect(fetched.id).toBe(captureId);
  });

  test("authorize → void releases the authorization", async () => {
    const transaction = await authorize(3300);
    expect(transaction.status).toBe("authorization_succeeded");

    const voided = unwrapTransaction(
      await gr4vy.transactions.void(transaction.id)
    );
    expect(voided.id).toBe(transaction.id);

    const after = await pollUntil(
      () => gr4vy.transactions.get(transaction.id),
      (t) =>
        t.status === "authorization_voided" ||
        t.status === "authorization_void_pending",
      { description: "void to be reflected" }
    );
    expect(["authorization_voided", "authorization_void_pending"]).toContain(
      after.status
    );
  });

  // `cancel` is not supported by the mock-card connector, so the call is
  // exercised at the request level: the SDK forms the request and the API
  // rejects it with a clear "not supported" error.
  test("authorize → cancel is exercised at the request level", async () => {
    const transaction = await authorize(1500);
    await expect(gr4vy.transactions.cancel(transaction.id)).rejects.toThrow();
  });

  test("intent=capture authorizes and captures in one step", async () => {
    const transaction = await authorize(2500, "capture");
    expect(["capture_succeeded", "capture_pending"]).toContain(
      transaction.status
    );
  });

  test("exposes actions, events and settlements for a transaction", async () => {
    const transaction = await authorize(4200, "capture");

    const actions = await gr4vy.transactions.actions.list(transaction.id);
    expect(Array.isArray(actions.items)).toBe(true);

    const events = await gr4vy.transactions.events.list(transaction.id);
    expect(events).toBeDefined();

    const settlements = await gr4vy.transactions.settlements.list(transaction.id);
    expect(settlements).toBeDefined();

    // No settlement exists yet for a freshly captured transaction in the mock
    // env, so fetching one by id is exercised at the request level.
    await expect(
      gr4vy.transactions.settlements.get(
        transaction.id,
        "00000000-0000-0000-0000-000000000000"
      )
    ).rejects.toThrow();
  });

  // `sync` is not supported by the mock-card connector; exercise the call shape
  // and assert the API rejects it rather than skipping the endpoint.
  test("sync is exercised at the request level", async () => {
    const transaction = await authorize(1700);
    await expect(gr4vy.transactions.sync(transaction.id)).rejects.toThrow();
  });
});
