import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { ThreeDSecureScenarioCreate } from "../../src/models/components";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

const scenario = (): ThreeDSecureScenarioCreate => ({
  conditions: { amount: 5000 },
  outcome: { authentication: { transactionStatus: "Y" } },
});

describe("3DS Scenarios", () => {
  test("create → list → update (partial) → delete", async () => {
    const created = await gr4vy.threeDsScenarios.create(scenario());
    expect(created.id).toBeDefined();

    const page = await gr4vy.threeDsScenarios.list();
    expect(page).toBeDefined();

    // Partial update: replace only the outcome, leaving the conditions intact.
    const updated = await gr4vy.threeDsScenarios.update(
      { outcome: { authentication: { transactionStatus: "N" } } },
      created.id
    );
    expect(updated.id).toBe(created.id);

    await gr4vy.threeDsScenarios.delete(created.id);
  });
});
