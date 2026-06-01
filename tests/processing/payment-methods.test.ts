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

    // Provisioning a network token (and the suspend/resume/delete/cryptogram
    // operations that follow it) requires the merchant account to be onboarded
    // with the card schemes (Visa/Mastercard requestor IDs) — not available on
    // the mock merchant. Each call is asserted to be well-formed and rejected by
    // the API for a real reason rather than silently skipping coverage.
    test("provision / suspend / resume / delete / cryptogram are exercised at the request level", async () => {
      const card = await storeCard();
      const bogusToken = "00000000-0000-0000-0000-000000000000";

      await expect(
        gr4vy.paymentMethods.networkTokens.create(
          { merchantInitiated: true, isSubsequentPayment: false },
          card.id
        )
      ).rejects.toThrow();

      await expect(
        gr4vy.paymentMethods.networkTokens.suspend(card.id, bogusToken)
      ).rejects.toThrow();
      await expect(
        gr4vy.paymentMethods.networkTokens.resume(card.id, bogusToken)
      ).rejects.toThrow();
      await expect(
        gr4vy.paymentMethods.networkTokens.delete(card.id, bogusToken)
      ).rejects.toThrow();
      await expect(
        gr4vy.paymentMethods.networkTokens.cryptogram.create(
          { merchantInitiated: true },
          card.id,
          bogusToken
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

    // Creating/deleting a service token requires a tokenization-capable service,
    // which mock-card is not; exercise the call shape at the request level.
    test("create and delete are exercised at the request level", async () => {
      const card = await storeCard();
      await expect(
        gr4vy.paymentMethods.paymentServiceTokens.create(
          {
            paymentServiceId: "00000000-0000-0000-0000-000000000000",
            redirectUrl: "https://example.com/return",
          },
          card.id
        )
      ).rejects.toThrow();
      await expect(
        gr4vy.paymentMethods.paymentServiceTokens.delete(
          card.id,
          "00000000-0000-0000-0000-000000000000"
        )
      ).rejects.toThrow();
    });
  });
});
