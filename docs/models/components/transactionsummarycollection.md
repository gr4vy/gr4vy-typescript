# TransactionSummaryCollection

Collection of results.

## Example Usage

```typescript
import { TransactionSummaryCollection } from "@gr4vy/sdk/models/components";

let value: TransactionSummaryCollection = {
  items: [
    {
      type: "transaction",
      id: "7099948d-7286-47e4-aad8-b68f7eb44591",
      reconciliationId: "default",
      merchantAccountId: "default",
      currency: "EUR",
      amount: 1299,
      status: "authorization_succeeded",
      authorizedAmount: 1299,
      capturedAmount: 1299,
      refundedAmount: 1299,
      settledCurrency: "USD",
      settledAmount: 1100,
      settled: true,
      country: "GB",
      externalIdentifier: "transaction-12345",
      intent: "capture",
      paymentMethod: {
        type: "payment-method",
        approvalUrl: "https://gr4vy.app/redirect/12345",
        country: "DE",
        currency: "GBP",
        expirationDate: "12/30",
        fingerprint:
          "20eb353620155d2b5fc864cc46a73ea77cb92c725238650839da1813fa987a17",
        label: "1234",
        lastReplacedAt: new Date("2013-07-16T19:23:00.000+00:00"),
        method: "card",
        mode: "card",
        scheme: "visa",
        id: "852b951c-d7ea-4c98-b09e-4a1c9e97c077",
        approvalTarget: "any",
        externalIdentifier: "card-12345",
        paymentAccountReference: "V0010014629724763377327521982",
      },
      method: "card",
      instrumentType: "pan",
      errorCode: "missing_redirect_url",
      paymentService: {
        type: "payment-service",
        id: "824ff064-7f4b-430b-9801-59aff90d013e",
        paymentServiceDefinitionId: "stripe-card",
        method: "card",
        displayName: "Stripe USA",
      },
      pendingReview: false,
      buyer: {
        type: "buyer",
        id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
        displayName: "John Doe",
        externalIdentifier: "buyer-12345",
        billingDetails: {
          firstName: "John",
          lastName: "Doe",
          emailAddress: "john@example.com",
          phoneNumber: "+14155552671",
          address: {
            city: "San Jose",
            country: "GB",
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
            kind: "us.ein",
          },
        },
      },
      rawResponseCode: "E104",
      rawResponseDescription: "Missing redirect URL",
      shippingDetails: {
        firstName: "John",
        lastName: "Doe",
        emailAddress: "john@example.com",
        phoneNumber: "+14155552671",
        address: {
          city: "San Jose",
          country: "US",
          postalCode: "94560",
          state: "California",
          stateCode: "GB-LND",
          houseNumberOrName: "10",
          line1: "Stafford Appartments",
          line2: "29th Street",
          organization: "Gr4vy",
        },
        id: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
        buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
        type: "shipping-details",
      },
      checkoutSessionId: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
      giftCardRedemptions: [
        {
          type: "gift-card-redemption",
          id: "31e65fb1-9c67-432e-9c06-83300b9d4059",
          status: "succeeded",
          amount: 100,
          refundedAmount: 50,
          giftCardServiceRedemptionId: "xYqd43gySMtori",
          errorCode: "expired_card",
          rawErrorCode: "10001",
          rawErrorMessage: "Card expired",
          giftCard: {
            type: "gift-card",
            id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
            bin: "412345",
            subBin: "554",
            last4: "1234",
          },
        },
      ],
      giftCardService: {
        type: "gift-card-service",
        id: "35b60feec-a7c7-4844-b503-f39b09192d81",
        giftCardServiceDefinitionId: "qwikcilver-gift-card",
        displayName: "Qwikcilver USA",
      },
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
  limit: 20,
  nextCursor: "ZXhhbXBsZTE",
  previousCursor: "Xkjss7asS",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.TransactionSummary](../../models/components/transactionsummary.md)[] | :heavy_check_mark:                                                               | A list of items returned for this request.                                       |                                                                                  |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | The number of items for this page.                                               | 20                                                                               |
| `nextCursor`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | The cursor pointing at the next page of items.                                   | ZXhhbXBsZTE                                                                      |
| `previousCursor`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | The cursor pointing at the previous page of items.                               | Xkjss7asS                                                                        |