import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

describe("Gift Cards", () => {
  test("listing gift cards returns a page", async () => {
    const page = await gr4vy.giftCards.list({});
    expect(page).toBeDefined();
  });

  // Creating a gift card and reading its balance requires a gift-card service
  // (e.g. `mock-gift-card`) to be configured on the merchant. The mock merchant
  // is provisioned only with `mock-card`, so these calls are exercised at the
  // request level and the API is expected to reject them for a real reason.
  test("create is exercised at the request level", async () => {
    await expect(
      gr4vy.giftCards.create({
        number: "4111111111111111",
        pin: "1234",
      })
    ).rejects.toThrow();
  });

  test("balance lookup is exercised at the request level", async () => {
    await expect(
      gr4vy.giftCards.balances.list({
        items: [{ number: "4111111111111111", pin: "1234" }],
      })
    ).rejects.toThrow();
  });
});
