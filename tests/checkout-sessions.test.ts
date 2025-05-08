import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { CardPaymentMethodCreate } from '../src/models/components';
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

    // We do not use the SDK here as we don't want to make this feature public
    const response = await fetch(`https://api.sandbox.e2e.gr4vy.app/checkout/sessions/${checkoutSession.id}/fields`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        "payment_method": {
          "method": "card",
          "number": "4111111111111111",
          "expiration_date": "11/25",
          "security_code": "123",
        }
      })
    })
    expect(response.status).toBe(204);

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
    expect(transaction.amount).toBe(1299);
  });

  test("should handle the error raised on missing card data", async () => {
    const checkoutSession = await gr4vy.checkoutSessions.create()
    expect(checkoutSession.id).toBeDefined();

    const request = {
      amount: 1299,
      currency: "USD",
      paymentMethod: {
        method: "checkout-session",
        id: checkoutSession.id
      }
    }
    await expect(() => gr4vy.transactions.create(request)).rejects.toThrowError("Request failed validation")
  });

  test("should handle a stored payment method", async () => {
    const request: CardPaymentMethodCreate = {
      method: "card",
      number: "4111111111111111",
      expirationDate: "11/25",
      securityCode: "123",
    };

    const paymentMethod = await gr4vy.paymentMethods.create(request)
    expect(paymentMethod.id).toBeDefined()

    const checkoutSession = await gr4vy.checkoutSessions.create()
    expect(checkoutSession.id).toBeDefined();

    // We do not use the SDK here as we don't want to make this feature public
    const response = await fetch(`https://api.sandbox.e2e.gr4vy.app/checkout/sessions/${checkoutSession.id}/fields`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        "payment_method": {
          "method": "id",
          "id": paymentMethod.id,
          "security_code": "123",
        }
      })
    })
    expect(response.status).toBe(204);

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
    expect(transaction.amount).toBe(1299);
  });
});