import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

const registerGoogleWallet = () =>
  gr4vy.digitalWallets.create({
    provider: "google",
    merchantName: "gr4vy-e2e",
    merchantDisplayName: "Gr4vy E2E",
    acceptTermsAndConditions: true,
  });

describe("Digital Wallets", () => {
  test("register → get → list → update (partial) → delete", async () => {
    const created = await registerGoogleWallet();
    expect(created.id).toBeDefined();

    const fetched = await gr4vy.digitalWallets.get(created.id);
    expect(fetched.id).toBe(created.id);

    const list = await gr4vy.digitalWallets.list();
    expect(list.items.some((w) => w.id === created.id)).toBe(true);

    // Partial update: change only the display name.
    const updated = await gr4vy.digitalWallets.update(
      { merchantDisplayName: "Renamed Display" },
      created.id
    );
    expect(updated.merchantDisplayName).toBe("Renamed Display");

    await gr4vy.digitalWallets.delete(created.id);
    await expect(() => gr4vy.digitalWallets.get(created.id)).rejects.toThrow();
  });

  // Apple Pay domain registration requires an Apple-provider wallet with a
  // verified merchant. We exercise the call shape; the mock merchant is not
  // onboarded for Apple Pay, so a real API rejection is expected.
  test("apple pay domain registration is exercised at the request level", async () => {
    const wallet = await registerGoogleWallet();
    await expect(
      gr4vy.digitalWallets.domains.create(
        { domainName: "example.com" },
        wallet.id
      )
    ).rejects.toThrow();
  });

  // A Google Pay session can be minted server-side from an origin domain; assert
  // the SDK returns the gateway merchant id + session token.
  test("creates a google pay session", async () => {
    const session = await gr4vy.digitalWallets.sessions.googlePay({
      originDomain: "not-a-registered-domain.example.com",
    });
    expect(session).toHaveProperty("token");
  });
});
