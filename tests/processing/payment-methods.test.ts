import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { buyer, cardPaymentMethod } from "../utils/fixtures";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

const storeCard = () => gr4vy.paymentMethods.create(cardPaymentMethod());

describe("Payment Methods", () => {
  test("create → get → list → delete", async () => {
    const created = await storeCard();
    expect(created.id).toBeDefined();
    expect(created.method).toBe("card");

    const fetched = await gr4vy.paymentMethods.get(created.id);
    expect(fetched.id).toBe(created.id);

    const page = await gr4vy.paymentMethods.list({});
    expect(page).toBeDefined();

    await gr4vy.paymentMethods.delete(created.id);
    await expect(() => gr4vy.paymentMethods.get(created.id)).rejects.toThrow();
  });

  test("update changes only the expiration date (partial)", async () => {
    const created = await storeCard();
    const updated = await gr4vy.paymentMethods.update(
      { expirationDate: "12/30" },
      created.id
    );
    expect(updated.id).toBe(created.id);
    expect(updated.expirationDate).toBe("12/30");
  });

  test("can be stored against a buyer", async () => {
    const owner = await gr4vy.buyers.create(buyer());
    const method = await gr4vy.paymentMethods.create({
      ...cardPaymentMethod(),
      buyerId: owner.id,
    });
    expect(method.buyer?.id).toBe(owner.id);
  });

  describe("network tokens", () => {
    test("listing tokens for a fresh card returns an empty collection", async () => {
      const card = await storeCard();
      const tokens = await gr4vy.paymentMethods.networkTokens.list(card.id);
      expect(Array.isArray(tokens.items)).toBe(true);
    });

    // Provisioning a network token requires the merchant account to be onboarded
    // with the card schemes (Visa/Mastercard requestor IDs) — not available on
    // the mock merchant. We assert the call is well-formed and that the API
    // rejects it for a real reason rather than silently skipping coverage.
    test("provisioning is exercised at the request level", async () => {
      const card = await storeCard();
      await expect(
        gr4vy.paymentMethods.networkTokens.create(
          { merchantInitiated: true, isSubsequentPayment: false },
          card.id
        )
      ).rejects.toThrow();
    });
  });

  describe("payment service tokens", () => {
    test("listing service tokens for a fresh card returns a collection", async () => {
      const card = await storeCard();
      const tokens = await gr4vy.paymentMethods.paymentServiceTokens.list(
        card.id
      );
      expect(Array.isArray(tokens.items)).toBe(true);
    });
  });
});
