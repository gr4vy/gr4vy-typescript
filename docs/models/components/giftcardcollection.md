# GiftCardCollection

Collection of results.

## Example Usage

```typescript
import { GiftCardCollection } from "@gr4vy/sdk/models/components";

let value: GiftCardCollection = {
  items: [
    {
      type: "gift-card",
      id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
      merchantAccountId: "default",
      giftCardService: {
        type: "gift-card-service",
        id: "35b60feec-a7c7-4844-b503-f39b09192d81",
        giftCardServiceDefinitionId: "qwikcilver-gift-card",
        displayName: "Qwikcilver USA",
      },
      bin: "412345",
      subBin: "554",
      last4: "1234",
      expirationDate: new Date("2013-07-16T19:23:00.000+00:00"),
      buyer: {
        type: "buyer",
        id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
        merchantAccountId: "default",
        displayName: "John Doe",
        externalIdentifier: "buyer-12345",
        billingDetails: {
          firstName: "John",
          lastName: "Doe",
          emailAddress: "john@example.com",
          phoneNumber: "+442071838750",
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
          taxId: {
            value: "12345678931",
            kind: "us.ein",
          },
        },
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `items`                                                      | [components.GiftCard](../../models/components/giftcard.md)[] | :heavy_check_mark:                                           | A list of items returned for this request.                   |                                                              |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | The number of items for this page.                           | 20                                                           |
| `nextCursor`                                                 | *string*                                                     | :heavy_minus_sign:                                           | The cursor pointing at the next page of items.               | ZXhhbXBsZTE                                                  |
| `previousCursor`                                             | *string*                                                     | :heavy_minus_sign:                                           | The cursor pointing at the previous page of items.           | Xkjss7asS                                                    |