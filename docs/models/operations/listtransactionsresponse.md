# ListTransactionsResponse

## Example Usage

```typescript
import { ListTransactionsResponse } from "@gr4vy/sdk/models/operations";

let value: ListTransactionsResponse = {
  result: {
    items: [
      {
        id: "7099948d-7286-47e4-aad8-b68f7eb44591",
        reconciliationId: "default",
        merchantAccountId: "default",
        currency: "GBP",
        amount: 1299,
        status: "authorization_void_pending",
        authorizedAmount: 1299,
        capturedAmount: 1299,
        refundedAmount: 1299,
        settledCurrency: "USD",
        settledAmount: 1100,
        settled: true,
        country: "US",
        externalIdentifier: "transaction-12345",
        intent: "capture",
        paymentMethod: {
          approvalUrl: "https://gr4vy.app/redirect/12345",
          country: "US",
          currency: "USD",
          expirationDate: "12/30",
          fingerprint:
            "20eb353620155d2b5fc864cc46a73ea77cb92c725238650839da1813fa987a17",
          label: "1234",
          lastReplacedAt: new Date("2013-07-16T19:23:00.000+00:00"),
          method: "dcb",
          mode: "card",
          scheme: "visa",
          id: "852b951c-d7ea-4c98-b09e-4a1c9e97c077",
          approvalTarget: "any",
          externalIdentifier: "card-12345",
          paymentAccountReference: "V0010014629724763377327521982",
        },
        instrumentType: "pan",
        errorCode: "missing_redirect_url",
        paymentService: {
          id: "824ff064-7f4b-430b-9801-59aff90d013e",
          paymentServiceDefinitionId: "stripe-card",
          method: "sofort",
          displayName: "Stripe USA",
        },
        buyer: {
          id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
          displayName: "John Doe",
          externalIdentifier: "buyer-12345",
          billingDetails: {
            firstName: "John",
            lastName: "Doe",
            emailAddress: "john@example.com",
            phoneNumber: "+1234567890",
            address: {
              city: "San Jose",
              country: "US",
              postalCode: "94560",
              state: "California",
              stateCode: "US-CA",
              houseNumberOrName: "10",
              line1: "Stafford Appartments",
              line2: "29th Street",
              organization: "Gr4vy",
            },
            taxId: {
              value: "12345678931",
              kind: "ru.inn",
            },
          },
        },
        rawResponseCode: "E104",
        rawResponseDescription: "Missing redirect URL",
        shippingDetails: {
          firstName: "John",
          lastName: "Doe",
          emailAddress: "john@example.com",
          phoneNumber: "+1234567890",
          address: {
            city: "San Jose",
            country: "US",
            postalCode: "94560",
            state: "California",
            stateCode: "US-CA",
            houseNumberOrName: "10",
            line1: "Stafford Appartments",
            line2: "29th Street",
            organization: "Gr4vy",
          },
          id: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
          buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
        },
        checkoutSessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
        giftCardRedemptions: [
          {
            id: "31e65fb1-9c67-432e-9c06-83300b9d4059",
            status: "created",
            amount: 100,
            refundedAmount: 50,
            giftCardServiceRedemptionId: "xYqd43gySMtori",
            errorCode: "incorrect_currency",
            rawErrorCode: "10001",
            rawErrorMessage: "Card expired",
            giftCard: {
              id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
              bin: "412345",
              subBin: "554",
              last4: "1234",
            },
          },
        ],
        giftCardService: {
          id: "35b60feec-a7c7-4844-b503-f39b09192d81",
          giftCardServiceDefinitionId: "mock-gift-card",
          displayName: "Qwikcilver USA",
        },
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: "Xkjss7asS",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.CollectionTransactionSummary](../../models/components/collectiontransactionsummary.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |