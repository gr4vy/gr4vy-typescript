import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { cartItem, uniqueId } from "../utils/fixtures";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

describe("Payment Links", () => {
  test("create → get → list → expire", async () => {
    const created = await gr4vy.paymentLinks.create({
      amount: 1299,
      currency: "USD",
      country: "US",
      externalIdentifier: uniqueId("plink"),
      cartItems: [cartItem()],
      merchantName: "Gr4vy E2E",
    });
    expect(created.id).toBeDefined();

    const fetched = await gr4vy.paymentLinks.get(created.id);
    expect(fetched.id).toBe(created.id);

    const page = await gr4vy.paymentLinks.list();
    expect(page).toBeDefined();

    await gr4vy.paymentLinks.expire(created.id);
    const afterExpiry = await gr4vy.paymentLinks.get(created.id);
    expect(afterExpiry.status).toBe("expired");
  });
});
