# GiftCard

Base model with JSON encoders.

## Example Usage

```typescript
import { GiftCard } from "@gr4vy/sdk/models/components";

let value: GiftCard = {
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
      phoneNumber: "+14155552671",
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
        kind: "us.ein",
      },
    },
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
  },
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      | Example                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                           | [components.GiftCardType](../../models/components/giftcardtype.md)                                                                                               | :heavy_minus_sign:                                                                                                                                               | Always `gift-card`.                                                                                                                                              | gift-card                                                                                                                                                        |
| `id`                                                                                                                                                             | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The ID for the gift card.                                                                                                                                        | 356d56e5-fe16-42ae-97ee-8d55d846ae2e                                                                                                                             |
| `merchantAccountId`                                                                                                                                              | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The ID of the merchant account this buyer belongs to.                                                                                                            | default                                                                                                                                                          |
| `giftCardService`                                                                                                                                                | [components.GiftCardService](../../models/components/giftcardservice.md)                                                                                         | :heavy_check_mark:                                                                                                                                               | The service this gift card belongs to.                                                                                                                           |                                                                                                                                                                  |
| `bin`                                                                                                                                                            | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The first 6 digits of the full gift card number.                                                                                                                 | 412345                                                                                                                                                           |
| `subBin`                                                                                                                                                         | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The 3 digits after the `bin` of the full gift card number.                                                                                                       | 554                                                                                                                                                              |
| `last4`                                                                                                                                                          | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The last 4 digits for the gift card.                                                                                                                             | 1234                                                                                                                                                             |
| `expirationDate`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                    | :heavy_minus_sign:                                                                                                                                               |  The date and time when this gift card expires. This is a full date/time and may be more accurate than the actual expiry date received by the gift card service. | 2013-07-16T19:23:00.000+00:00                                                                                                                                    |
| `buyer`                                                                                                                                                          | [components.GiftCardBuyer](../../models/components/giftcardbuyer.md)                                                                                             | :heavy_minus_sign:                                                                                                                                               | The buyer for which this gift card is stored.                                                                                                                    |                                                                                                                                                                  |
| `createdAt`                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                    | :heavy_check_mark:                                                                                                                                               | The date this gift card record was created at.                                                                                                                   | 2013-07-16T19:23:00.000+00:00                                                                                                                                    |
| `updatedAt`                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                    | :heavy_check_mark:                                                                                                                                               | The date this gift card record was last updated at.                                                                                                              | 2013-07-16T19:23:00.000+00:00                                                                                                                                    |