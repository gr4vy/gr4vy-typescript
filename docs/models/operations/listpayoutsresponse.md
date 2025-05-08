# ListPayoutsResponse

## Example Usage

```typescript
import { ListPayoutsResponse } from "@gr4vy/sdk/models/operations";

let value: ListPayoutsResponse = {
  result: {
    items: [
      {
        id: "6f96a57e-a35b-4f98-b192-d298995f811a",
        amount: 1299,
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
              kind: "ar.cuit",
            },
          },
        },
        category: "online_gambling",
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        currency: "GBP",
        externalIdentifier: "payout-12345",
        merchant: {
          name: "Acme Inc",
          identificationNumber: "12345",
          phoneNumber: "+442071838750",
          url: "https://example.com",
          statementDescriptor: "Winnings",
          merchantCategoryCode: "1234",
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
        },
        merchantAccountId: "default",
        paymentMethod: {
          approvalUrl: "https://gr4vy.app/redirect/12345",
          country: "US",
          currency: "USD",
          expirationDate: "12/30",
          fingerprint:
            "20eb353620155d2b5fc864cc46a73ea77cb92c725238650839da1813fa987a17",
          label: "1234",
          lastReplacedAt: new Date("2013-07-16T19:23:00.000+00:00"),
          method: "multipago",
          mode: "card",
          scheme: "visa",
          id: "852b951c-d7ea-4c98-b09e-4a1c9e97c077",
          approvalTarget: "any",
          externalIdentifier: "card-12345",
          paymentAccountReference: "V0010014629724763377327521982",
        },
        paymentService: {
          id: "b6c9eb12-2b62-4103-99b9-e3efc94e396d",
          paymentServiceDefinitionId: "nuvei-card",
          displayName: "Nuvei",
        },
        paymentServicePayoutId: "pout-12345",
        status: "pending",
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: "Xkjss7asS",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.CollectionPayoutSummary](../../models/components/collectionpayoutsummary.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |