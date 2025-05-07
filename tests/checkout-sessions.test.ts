import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { cleanupEnvironment, setupEnvironment } from './utils/setup';

let gr4vy;

beforeAll(async () => {
  gr4vy = await setupEnvironment()
});

afterAll(async () => {
  await cleanupEnvironment()
});

describe("Checkout Sessions", () => {
  test("should process a payment with a checkout session", async () => {
    const checkoutSession = await gr4vy.checkoutSessions.create()
    expect(checkoutSession.id).toBeDefined();

    const transaction = await gr4vy.transactions.create({
      amount: 1299,
      currency: "USD",
      paymentMethod: {
        method: "checkout-session",
        id: checkoutSession.id
      }
    })
    
    expect(transaction.id).toBeDefined();
    expect(transaction.status).toBe("authorization_succeeded");
  });
});