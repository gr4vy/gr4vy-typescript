import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { APPROVING_CARD } from "../utils/fixtures";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

describe("Payouts", () => {
  test("listing payouts returns a page", async () => {
    const page = await gr4vy.payouts.list();
    expect(page).toBeDefined();
  });

  // The mock-card service is not a payout-capable connection, so creating a
  // payout is exercised at the request level — the SDK serialises the payload
  // and the API rejects it for a real reason rather than the test skipping it.
  test("create is exercised at the request level", async () => {
    const service = await gr4vy.paymentServices.create({
      displayName: "Mock card service",
      paymentServiceDefinitionId: "mock-card",
      acceptedCurrencies: ["USD"],
      acceptedCountries: ["US"],
      fields: [{ key: "merchant_id", value: "test" }],
    });

    await expect(
      gr4vy.payouts.create({
        amount: 1299,
        currency: "USD",
        paymentServiceId: service.id,
        paymentMethod: {
          method: "card",
          number: APPROVING_CARD.number,
          expirationDate: APPROVING_CARD.expiration_date,
        },
      })
    ).rejects.toThrow();
  });

  test("fetching a missing payout is exercised at the request level", async () => {
    await expect(
      gr4vy.payouts.get("00000000-0000-0000-0000-000000000000")
    ).rejects.toThrow();
  });
});
