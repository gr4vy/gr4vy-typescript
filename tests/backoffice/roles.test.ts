import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { createGr4vyClient, setupMerchant } from "../utils/setup";

let admin: Gr4vy;

beforeAll(async () => {
  // Roles are an instance-level resource (not merchant-scoped), so use an
  // un-scoped client — mirrors the API key pairs suite.
  const { privateKey } = await setupMerchant();
  admin = createGr4vyClient(privateKey);
});

describe("Roles", () => {
  test("listing roles returns a page of roles", async () => {
    const page = await admin.roles.list();
    expect(page).toBeDefined();

    for (const role of page.result.items) {
      expect(role.type).toBe("role");
      expect(role.id).toBeTruthy();
      expect(role.slug).toBeTruthy();
    }
  });
});
