import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { PaymentServiceCreate } from "../../src/models/components";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

const mockCardService = (
  overrides: Partial<PaymentServiceCreate> = {}
): PaymentServiceCreate => ({
  displayName: "Mock card service",
  paymentServiceDefinitionId: "mock-card",
  acceptedCurrencies: ["USD"],
  acceptedCountries: ["US"],
  fields: [{ key: "merchant_id", value: "test" }],
  ...overrides,
});

describe("Payment Services", () => {
  test("create → get → list → update (partial) → delete", async () => {
    const created = await gr4vy.paymentServices.create(mockCardService());
    expect(created.id).toBeDefined();

    const fetched = await gr4vy.paymentServices.get(created.id!);
    expect(fetched.id).toBe(created.id);

    const page = await gr4vy.paymentServices.list({});
    expect(page).toBeDefined();

    // Partial update: change only the display name.
    const updated = await gr4vy.paymentServices.update(
      { displayName: "Renamed service" },
      created.id!
    );
    expect(updated.displayName).toBe("Renamed service");

    await gr4vy.paymentServices.delete(created.id!);
    await expect(() => gr4vy.paymentServices.get(created.id!)).rejects.toThrow();
  });

  // Credential verification and session creation are not meaningfully supported
  // by the mock-card connector (verify returns a non-JSON body; session is
  // explicitly unsupported), so both are exercised at the request level.
  test("verify is exercised at the request level", async () => {
    await expect(
      gr4vy.paymentServices.verify({
        paymentServiceDefinitionId: "mock-card",
        fields: [{ key: "merchant_id", value: "test" }],
      })
    ).rejects.toThrow();
  });

  test("create a session is exercised at the request level", async () => {
    const created = await gr4vy.paymentServices.create(mockCardService());
    await expect(
      gr4vy.paymentServices.session({}, created.id!)
    ).rejects.toThrow();
  });

  describe("definitions, options and card schemes", () => {
    test("list and get payment service definitions", async () => {
      const page = await gr4vy.paymentServiceDefinitions.list();
      expect(page).toBeDefined();

      const definition =
        await gr4vy.paymentServiceDefinitions.get("mock-card");
      expect(definition.id).toBe("mock-card");
    });

    test("create a session for a definition is exercised at the request level", async () => {
      // Session creation is not supported for the mock-card definition.
      await expect(
        gr4vy.paymentServiceDefinitions.session({}, "mock-card")
      ).rejects.toThrow();
    });

    test("list payment options for a cart", async () => {
      const options = await gr4vy.paymentOptions.list({
        country: "US",
        currency: "USD",
        amount: 1299,
      });
      expect(options).toBeDefined();
    });

    test("list card scheme definitions", async () => {
      const schemes = await gr4vy.cardSchemeDefinitions.list();
      expect(schemes).toBeDefined();
    });
  });
});
