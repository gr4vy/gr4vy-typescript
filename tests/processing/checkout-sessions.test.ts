import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { CardPaymentMethodCreate } from "../../src/models/components";
import {
  APPROVING_CARD,
  cardPaymentMethod,
  cartItem,
} from "../utils/fixtures";
import {
  putCheckoutSessionCard,
  putCheckoutSessionStoredMethod,
} from "../utils/fields";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

describe("Checkout Sessions", () => {
  test("should process a payment with a checkout session", async () => {
    const checkoutSession = await gr4vy.checkoutSessions.create();
    expect(checkoutSession.id).toBeDefined();

    await putCheckoutSessionCard(checkoutSession, APPROVING_CARD);

    const transaction = await gr4vy.transactions.create({
      amount: 1299,
      currency: "USD",
      paymentMethod: { method: "checkout-session", id: checkoutSession.id },
    });

    expect(transaction.id).toBeDefined();
    expect(transaction.status).toBe("authorization_succeeded");
    expect(transaction.amount).toBe(1299);
  });

  test("should handle the error raised on missing card data", async () => {
    const checkoutSession = await gr4vy.checkoutSessions.create();
    expect(checkoutSession.id).toBeDefined();

    const request = {
      amount: 1299,
      currency: "USD",
      paymentMethod: {
        method: "checkout-session" as const,
        id: checkoutSession.id,
      },
    };
    await expect(() => gr4vy.transactions.create(request)).rejects.toThrowError(
      "Request failed validation"
    );
  });

  test("should handle a stored payment method", async () => {
    const request: CardPaymentMethodCreate = cardPaymentMethod();
    const paymentMethod = await gr4vy.paymentMethods.create(request);
    expect(paymentMethod.id).toBeDefined();

    const checkoutSession = await gr4vy.checkoutSessions.create();
    await putCheckoutSessionStoredMethod(
      checkoutSession,
      paymentMethod.id,
      "123"
    );

    const transaction = await gr4vy.transactions.create({
      amount: 1299,
      currency: "USD",
      paymentMethod: { method: "checkout-session", id: checkoutSession.id },
    });

    expect(transaction.id).toBeDefined();
    expect(transaction.status).toBe("authorization_succeeded");
    expect(transaction.amount).toBe(1299);
  });

  test("create → get → update (partial) → delete", async () => {
    const created = await gr4vy.checkoutSessions.create({
      cartItems: [cartItem()],
      metadata: { source: "test" },
    });
    expect(created.id).toBeDefined();

    const fetched = await gr4vy.checkoutSessions.get(created.id);
    expect(fetched.id).toBe(created.id);

    // Partial update: change only the metadata, leave the cart items.
    const updated = await gr4vy.checkoutSessions.update(
      { metadata: { source: "updated" } },
      created.id
    );
    expect(updated.metadata?.["source"]).toBe("updated");

    await gr4vy.checkoutSessions.delete(created.id);
    await expect(() => gr4vy.checkoutSessions.get(created.id)).rejects.toThrow();
  });
});
