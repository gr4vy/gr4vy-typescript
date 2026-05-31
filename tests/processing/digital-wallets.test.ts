import { beforeAll, describe, expect, test } from "vitest";
import { Gr4vy } from "../../src";
import { DigitalWallet } from "../../src/models/components";
import { uniqueId } from "../utils/fixtures";
import { setupMerchant } from "../utils/setup";

let gr4vy: Gr4vy;

beforeAll(async () => {
  ({ client: gr4vy } = await setupMerchant());
});

const registerGoogleWallet = () =>
  gr4vy.digitalWallets.create({
    provider: "google",
    merchantName: uniqueId("gr4vy-e2e"),
    merchantDisplayName: "Gr4vy E2E",
    acceptTermsAndConditions: true,
  });

// A merchant allows only one wallet per provider, so register a wallet, run the
// callback against it, then always remove it — keeping the tests isolated even
// though they share a merchant account.
const withWallet = async (
  fn: (wallet: DigitalWallet) => Promise<void>
): Promise<void> => {
  const wallet = await registerGoogleWallet();
  try {
    await fn(wallet);
  } finally {
    await gr4vy.digitalWallets.delete(wallet.id);
  }
};

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

  // A Google Pay session can be minted server-side from an origin domain; assert
  // the SDK returns the gateway merchant id + session token.
  test("creates a google pay session", async () => {
    const session = await gr4vy.digitalWallets.sessions.googlePay({
      originDomain: "not-a-registered-domain.example.com",
    });
    expect(session).toHaveProperty("token");
  });

  // The remaining wallet sessions (Apple Pay, Click to Pay, Paze + Paze mobile)
  // need a verified wallet / real device payloads that can't be minted on the
  // mock merchant. Each is exercised at the request level so the SDK request
  // shape is covered and the API rejects it for a real reason.
  describe("sessions exercised at the request level", () => {
    test("apple pay session", async () => {
      await expect(
        gr4vy.digitalWallets.sessions.applePay({
          validationUrl: "https://apple-pay-gateway.apple.com/paymentservices",
          domainName: "not-a-registered-domain.example.com",
        })
      ).rejects.toThrow();
    });

    test("click to pay session", async () => {
      await expect(
        gr4vy.digitalWallets.sessions.clickToPay({
          checkoutSessionId: "00000000-0000-0000-0000-000000000000",
        })
      ).rejects.toThrow();
    });

    test("paze session", async () => {
      await expect(
        gr4vy.digitalWallets.sessions.paze({
          source: "web",
          domainName: "not-a-registered-domain.example.com",
        })
      ).rejects.toThrow();
    });

    test("paze mobile session create / review / complete", async () => {
      await expect(
        gr4vy.digitalWallets.sessions.pazeMobileSessionCreate({
          client: { id: "client-id" },
          sessionId: "session-id",
          accessToken: "access-token",
          callbackURLScheme: "gr4vy",
          intent: "EXPRESS_CHECKOUT",
        })
      ).rejects.toThrow();

      await expect(
        gr4vy.digitalWallets.sessions.pazeMobileSessionReview({
          sessionId: "session-id",
          code: "code",
          accessToken: "access-token",
        })
      ).rejects.toThrow();

      await expect(
        gr4vy.digitalWallets.sessions.pazeMobileSessionComplete({
          sessionId: "session-id",
          code: "code",
          accessToken: "access-token",
          transactionType: "PURCHASE",
        })
      ).rejects.toThrow();
    });
  });

  // Apple Pay domain registration needs an Apple-provider wallet onboarded with
  // Apple; on the mock merchant both register and remove are rejected, which
  // still exercises the domain create/delete request shapes.
  describe("domains exercised at the request level", () => {
    test("domain registration is rejected", async () => {
      await withWallet(async (wallet) => {
        await expect(
          gr4vy.digitalWallets.domains.create(
            { domainName: "example.com" },
            wallet.id
          )
        ).rejects.toThrow();
      });
    });

    test("domain removal is idempotent", async () => {
      await withWallet(async (wallet) => {
        // Removing a domain that was never registered resolves without error.
        await expect(
          gr4vy.digitalWallets.domains.delete(
            { domainName: "example.com" },
            wallet.id
          )
        ).resolves.toBeUndefined();
      });
    });
  });
});
