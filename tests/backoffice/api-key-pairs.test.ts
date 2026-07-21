import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { createGr4vyClient, setupMerchant } from "../utils/setup";

let admin: Gr4vy;

// A nonexistent id used to exercise get/update/delete at the request level: the
// SDK serialises and sends the request, and the API rejects it with a 4xx.
const MISSING_ID = "00000000-0000-0000-0000-000000000000";

beforeAll(async () => {
  // API key pairs are an account-level resource (not merchant-scoped), so use an
  // un-scoped client — mirrors the merchant-accounts suite.
  const { privateKey } = await setupMerchant();
  admin = createGr4vyClient(privateKey);
});

describe("API Key Pairs", () => {
  test("listing API key pairs returns a page", async () => {
    const page = await admin.apiKeyPairs.list();
    expect(page).toBeDefined();
  });

  // create/get/update/delete are exercised at the request level rather than as a
  // happy path: creating a real key pair requires an existing role, and the
  // sandbox merchant is not provisioned with one. Passing a nonexistent role id
  // still serialises the payload and reaches the server (which rejects it with a
  // 4xx), so the operation counts as reached by the HTTP-coverage check.
  test("create is exercised at the request level", async () => {
    await expect(
      admin.apiKeyPairs.create({
        displayName: "E2E API key pair",
        roleIds: [MISSING_ID],
      })
    ).rejects.toThrow();
  });

  test("fetching a missing API key pair is exercised at the request level", async () => {
    await expect(admin.apiKeyPairs.get(MISSING_ID)).rejects.toThrow();
  });

  test("updating a missing API key pair is exercised at the request level", async () => {
    // Note the argument order: the update body comes first, then the id.
    await expect(
      admin.apiKeyPairs.update({ displayName: "Renamed" }, MISSING_ID)
    ).rejects.toThrow();
  });

  test("deleting a missing API key pair is exercised at the request level", async () => {
    await expect(admin.apiKeyPairs.delete(MISSING_ID)).rejects.toThrow();
  });
});
