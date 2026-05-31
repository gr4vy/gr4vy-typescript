import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { cardPaymentMethod } from "../utils/fixtures";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

describe("Account Updater", () => {
  // The Real-Time Account Updater (Loon) is not configured on the mock merchant,
  // so creating a job is exercised at the request level: a real stored payment
  // method id is submitted and the API is expected to reject the job because the
  // service is not enabled, rather than the test skipping the endpoint.
  test("creating a job is exercised at the request level", async () => {
    const method = await gr4vy.paymentMethods.create(cardPaymentMethod());

    await expect(
      gr4vy.accountUpdater.jobs.create({ paymentMethodIds: [method.id] })
    ).rejects.toThrow();
  });
});
