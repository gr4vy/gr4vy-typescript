# ListTransactionsResponse

## Example Usage

```typescript
import { ListTransactionsResponse } from "@gr4vy/sdk/models/operations";

let value: ListTransactionsResponse = {
  result: {
    items: [
      {
        type: "transaction",
        id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
        amount: 1299,
        authorizedAmount: 1299,
        buyer: {
          type: "buyer",
          id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
          billingDetails: {
            type: "billing-details",
            firstName: "John",
            lastName: "Lunn",
            emailAddress: "john@example.com",
            phoneNumber: "+1234567890",
            address: {
              city: "London",
              country: "GB",
              postalCode: "789123",
              state: "Greater London",
              stateCode: "GB-LND",
              houseNumberOrName: "10",
              line1: "10 Oxford Street",
              line2: "New Oxford Court",
              organization: "Gr4vy",
            },
            taxId: {
              value: "12345678931",
              kind: "gb.vat",
            },
          },
          displayName: "John L.",
          externalIdentifier: "user-789123",
        },
        capturedAmount: 999,
        checkoutSessionId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
        country: "US",
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        currency: "USD",
        externalIdentifier: "user-789123",
        giftCardRedemptions: [
          {
            type: "gift-card-redemption",
            id: "bc3f0d5a-3529-4d31-b2b4-848d14926bbc",
            status: "succeeded",
            amount: 1299,
            refundedAmount: 1299,
            giftCardServiceRedemptionId: "xYqd43gySMtori",
            errorCode: "expired_card",
            rawErrorCode: "10001",
            rawErrorMessage: "Card expired.",
            giftCard: {
              type: "gift-card",
              id: "e6cdf979-87e2-4796-8ff6-9784d5aed893",
              bin: "412345",
              subBin: "554",
              last4: "1234",
            },
          },
        ],
        instrumentType: "network_token",
        intent: "authorize",
        merchantAccountId: "default",
        method: "card",
        paymentMethod: {
          type: "payment-method",
          id: "77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5",
          approvalTarget: "any",
          approvalUrl: "https://api.example.app.gr4vy.com/payment-methods/ffc88ec9-e1ee-45ba-993d-b5902c3b2a8c/approve",
          country: "US",
          currency: "USD",
          details: {
            cardType: "credit",
            bin: "412345",
          },
          expirationDate: "11/25",
          externalIdentifier: "user-789123",
          label: "1111",
          lastReplacedAt: new Date("2023-07-26T19:23:00.000+00:00"),
          method: "card",
          paymentAccountReference: "V0010014629724763377327521982",
          scheme: "visa",
          fingerprint: "20eb353620155d2b5fc864cc46a73ea77cb92c725238650839da1813fa987a17",
        },
        paymentService: {
          type: "payment-service",
          id: "stripe-card-faaad066-30b4-4997-a438-242b0752d7e1",
          displayName: "Stripe (Main)",
          method: "card",
          paymentServiceDefinitionId: "stripe-card",
        },
        pendingReview: true,
        rawResponseCode: "incorrect-zip",
        rawResponseDescription: "The card's postal code is incorrect. Check the card's postal code or use a
      different card.",
        reconciliationId: "7jZXl4gBUNl0CnaLEnfXbt",
        refundedAmount: 100,
        status: "processing",
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
    limit: 1,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: null,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `result`                                                           | [components.Transactions](../../models/components/transactions.md) | :heavy_check_mark:                                                 | N/A                                                                |