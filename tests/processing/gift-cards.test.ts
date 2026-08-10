import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { reaches } from "../utils/reach";
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
    await reaches(
      () =>
        gr4vy.giftCards.create({
          number: "4111111111111111",
          pin: "1234",
        }),
      "giftCards.create"
    );
  });

  test("balance lookup is exercised at the request level", async () => {
    await reaches(
      () =>
        gr4vy.giftCards.balances.list({
          items: [{ number: "4111111111111111", pin: "1234" }],
        }),
      "giftCards.balances.list"
    );
  });

  // No gift card exists to fetch/delete on the mock merchant, so get/delete are
  // exercised against a non-existent id and expected to be rejected.
  test("get and delete are exercised at the request level", async () => {
    const bogus = "00000000-0000-0000-0000-000000000000";
    await reaches(() => gr4vy.giftCards.get(bogus), "giftCards.get");
    await reaches(() => gr4vy.giftCards.delete(bogus), "giftCards.delete");
  });

  // Activation and issuance both need a configured gift-card service, so they
  // are asserted via `reaches` — a 2xx or a clean 4xx passes, a 5xx fails.
  test("activation is exercised at the request level", async () => {
    await reaches(
      () =>
        gr4vy.giftCards.activations.create({
          number: "4111111111111111",
          pin: "1234",
          amount: 1299,
          currency: "USD",
        }),
      "giftCards.activations.create"
    );
  });

  test("issuance is exercised at the request level", async () => {
    await reaches(
      () =>
        gr4vy.giftCards.issuances.create({
          theme: "default",
          amount: 1299,
          currency: "USD",
        }),
      "giftCards.issuances.create"
    );
  });
});
