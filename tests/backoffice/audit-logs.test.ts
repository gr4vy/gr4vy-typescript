import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { buyer } from "../utils/fixtures";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

describe("Audit Logs", () => {
  test("listing audit logs returns a page", async () => {
    // Perform a mutating action so the account has at least one audit entry.
    await gr4vy.buyers.create(buyer());

    const page = await gr4vy.auditLogs.list({});
    expect(page).toBeDefined();
  });
});
