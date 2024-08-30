# GiftCard

A gift card stored for a buyer, or used in a transaction.

## Example Usage

```typescript
import { GiftCard } from "@gr4vy/sdk/models/components";

let value: GiftCard = {
    type: "gift-card",
    id: "e6cdf979-87e2-4796-8ff6-9784d5aed893",
    merchantAccountId: "default",
    service: {
        type: "gift-card-service",
        id: "6c020bf3-179b-4f4f-858d-84e39e196e0f",
        merchantAccountId: "default",
        giftCardServiceDefinitionId: "qwikcilver-gift-card",
        displayName: "Qwikcilver UK",
        active: true,
        fields: [
            {
                key: "secret_key",
                value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
            },
        ],
        createdAt: new Date("2012-12-12T10:53:43+00:00"),
        updatedAt: new Date("2012-12-12T10:53:43+00:00"),
    },
    bin: "412345",
    subBin: "554",
    last4: "1234",
    expirationDate: new Date("2013-07-16T19:23:00.000+00:00"),
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
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        displayName: "John L.",
        externalIdentifier: "user-789123",
        merchantAccountId: "default",
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                          | [components.GiftCardType](../../models/components/giftcardtype.md)                                                                                              | :heavy_minus_sign:                                                                                                                                              | The type of this resource.                                                                                                                                      | gift-card                                                                                                                                                       |
| `id`                                                                                                                                                            | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The ID of this gift card.                                                                                                                                       | e6cdf979-87e2-4796-8ff6-9784d5aed893                                                                                                                            |
| `merchantAccountId`                                                                                                                                             | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The unique ID for a merchant account.                                                                                                                           | default                                                                                                                                                         |
| `service`                                                                                                                                                       | [components.GiftCardService](../../models/components/giftcardservice.md)                                                                                        | :heavy_minus_sign:                                                                                                                                              | An configured gift card service.                                                                                                                                |                                                                                                                                                                 |
| `bin`                                                                                                                                                           | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The first 6 digits of the full gift card number.                                                                                                                | 412345                                                                                                                                                          |
| `subBin`                                                                                                                                                        | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The 3 digits after the `bin` of the full gift card number.                                                                                                      | 554                                                                                                                                                             |
| `last4`                                                                                                                                                         | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | The last 4 digits for the gift card.                                                                                                                            | 1234                                                                                                                                                            |
| `expirationDate`                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_minus_sign:                                                                                                                                              | The date and time when this gift card expires. This is a full<br/>date/time and may be more accurate than the actual expiry date<br/>received by the gift card service. | 2013-07-16T19:23:00.000+00:00                                                                                                                                   |
| `buyer`                                                                                                                                                         | [components.GiftCardBuyer](../../models/components/giftcardbuyer.md)                                                                                            | :heavy_minus_sign:                                                                                                                                              | The optional buyer for which this payment method has been stored.                                                                                               |                                                                                                                                                                 |
| `createdAt`                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_minus_sign:                                                                                                                                              | The date and time when this gift card was created in our system.                                                                                                | 2013-07-16T19:23:00.000+00:00                                                                                                                                   |
| `updatedAt`                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                   | :heavy_minus_sign:                                                                                                                                              | The date and time when this gift card was last updated in our system.                                                                                           | 2013-07-16T19:23:00.000+00:00                                                                                                                                   |