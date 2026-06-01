import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import {
  address,
  billingDetails,
  buyer,
  cardPaymentMethod,
  uniqueId,
} from "../utils/fixtures";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

describe("Buyer lifecycle", () => {
  test("create buyer, store a card against them, transact, and read it back", async () => {
    // 1. Create a buyer.
    const created = await gr4vy.buyers.create(buyer({ displayName: "Ada Lovelace" }));
    expect(created.id).toBeDefined();
    expect(created.displayName).toBe("Ada Lovelace");

    // 2. Store a card payment method against the buyer.
    const method = await gr4vy.paymentMethods.create({
      ...cardPaymentMethod(),
      buyerId: created.id,
    });
    expect(method.id).toBeDefined();

    // 3. The stored method shows up under the buyer's payment methods.
    const buyerMethods = await gr4vy.buyers.paymentMethods.list({
      buyerId: created.id,
    });
    expect(buyerMethods.items.some((m) => m.id === method.id)).toBe(true);

    // 4. Add shipping details for the buyer.
    const shipping = await gr4vy.buyers.shippingDetails.create(
      {
        firstName: "Ada",
        lastName: "Lovelace",
        address: address(),
      },
      created.id!
    );
    expect(shipping.id).toBeDefined();

    // 5. Charge the stored method, referencing the buyer + shipping details.
    const transaction = await gr4vy.transactions.create({
      amount: 1299,
      currency: "USD",
      buyerId: created.id,
      shippingDetailsId: shipping.id,
      externalIdentifier: uniqueId("txn"),
      paymentMethod: { method: "id", id: method.id, securityCode: "123" },
    });
    expect(transaction.status).toBe("authorization_succeeded");

    // 6. Gift cards list for the buyer is reachable (empty is fine).
    const giftCards = await gr4vy.buyers.giftCards.list({ buyerId: created.id });
    expect(Array.isArray(giftCards.items)).toBe(true);
  });

  test("buyer can be created with billing details and deleted", async () => {
    const created = await gr4vy.buyers.create(
      buyer({ billingDetails: billingDetails({ firstName: "Grace" }) })
    );
    expect(created.billingDetails?.firstName).toBe("Grace");

    await gr4vy.buyers.delete(created.id!);
    await expect(() => gr4vy.buyers.get(created.id!)).rejects.toThrow();
  });
});
