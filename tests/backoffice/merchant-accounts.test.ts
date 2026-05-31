import crypto from "crypto";
import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { createGr4vyClient, setupMerchant } from "../utils/setup";

let admin: Gr4vy;
let privateKey: string;

beforeAll(async () => {
  // merchant-accounts are an admin-level resource, so use an un-scoped client.
  ({ privateKey } = await setupMerchant());
  admin = createGr4vyClient(privateKey);
});

const newMerchantId = () => crypto.randomBytes(8).toString("hex");

describe("Merchant Accounts", () => {
  test("create → get → list → update (partial)", async () => {
    const id = newMerchantId();
    const created = await admin.merchantAccounts.create({
      id,
      displayName: "Original Display",
    });
    expect(created.id).toBe(id);

    const fetched = await admin.merchantAccounts.get(id);
    expect(fetched.id).toBe(id);

    const page = await admin.merchantAccounts.list();
    expect(page).toBeDefined();

    // Partial update: change only the display name, leave everything else.
    const updated = await admin.merchantAccounts.update(
      { displayName: "Renamed Display" },
      id
    );
    expect(updated.displayName).toBe("Renamed Display");
    expect(updated.id).toBe(id);
  });

  describe("3DS configuration", () => {
    // 3DS configuration is keyed per scheme/currency on the merchant account.
    test("create → list → update (partial) → delete", async () => {
      const id = newMerchantId();
      await admin.merchantAccounts.create({ id, displayName: id });

      const created =
        await admin.merchantAccounts.threeDsConfiguration.create(
          {
            merchantAcquirerBin: "516327",
            merchantAcquirerId: "123456789012345",
            merchantName: "Gr4vy E2E",
            merchantCountryCode: "840",
            merchantCategoryCode: "1234",
            merchantUrl: "https://example.com",
            scheme: "visa",
            metadata: { env: "e2e" },
          },
          id
        );
      expect(created.id).toBeDefined();

      const list = await admin.merchantAccounts.threeDsConfiguration.list(id);
      expect(list).toBeDefined();

      const updated =
        await admin.merchantAccounts.threeDsConfiguration.update(
          { merchantName: "Renamed Merchant" },
          id,
          created.id!
        );
      expect(updated.merchantName).toBe("Renamed Merchant");

      await admin.merchantAccounts.threeDsConfiguration.delete(id, created.id!);
    });
  });
});
