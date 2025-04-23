# ListGiftCardsResponse

## Example Usage

```typescript
import { ListGiftCardsResponse } from "@gr4vy/sdk/models/operations";

let value: ListGiftCardsResponse = {
  result: {
    items: [
      {
        id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
        merchantAccountId: "default",
        giftCardService: {
          id: "35b60feec-a7c7-4844-b503-f39b09192d81",
          giftCardServiceDefinitionId: "mock-gift-card",
          displayName: "Qwikcilver USA",
        },
        bin: "412345",
        subBin: "554",
        last4: "1234",
        expirationDate: new Date("2013-07-16T19:23:00.000+00:00"),
        buyer: {
          id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
          merchantAccountId: "default",
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
              kind: "za.vat",
            },
          },
          createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
          updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.CollectionGiftCard](../../models/components/collectiongiftcard.md) | :heavy_check_mark:                                                             | N/A                                                                            |