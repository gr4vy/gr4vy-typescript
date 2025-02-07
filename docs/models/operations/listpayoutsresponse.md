# ListPayoutsResponse

## Example Usage

```typescript
import { ListPayoutsResponse } from "@gr4vy/sdk/models/operations";

let value: ListPayoutsResponse = {
  result: {
    items: [
      {
        type: "payout",
        id: "6f96a57e-a35b-4f98-b192-d298995f811a",
        amount: 1299,
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
              stateCode: "GB-LND",
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
        category: "online_gambling",
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        currency: "EUR",
        externalIdentifier: "payout-12345",
        merchant: {
          type: "merchant",
          name: "Acme Inc",
          identificationNumber: "12345",
          phoneNumber: "+14155552671",
          url: "https://example.com",
          statementDescriptor: "Winnings",
          merchantCategoryCode: "123456",
          address: {
            city: "San Jose",
            country: "DE",
            postalCode: "94560",
            state: "California",
            stateCode: "GB-LND",
            houseNumberOrName: "10",
            line1: "Stafford Appartments",
            line2: "29th Street",
            organization: "Gr4vy",
          },
        },
        merchantAccountId: "default",
        paymentMethod: {
          type: "payment-method",
          approvalUrl: "https://gr4vy.app/redirect/12345",
          country: "DE",
          currency: "EUR",
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
        paymentService: {
          type: "payment-service",
          id: "b6c9eb12-2b62-4103-99b9-e3efc94e396d",
          method: "card",
          paymentServiceDefinitionId: "nuvei-card",
          displayName: "Nuvei",
        },
        paymentServicePayoutId: "pout-12345",
        status: "succeeded",
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
    limit: 20,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: "Xkjss7asS",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.PayoutsSummaryCollection](../../models/components/payoutssummarycollection.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |