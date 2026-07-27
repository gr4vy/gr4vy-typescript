# GiftCardIssuance

## Example Usage

```typescript
import { GiftCardIssuance } from "@gr4vy/sdk/models/components";

let value: GiftCardIssuance = {
  id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
  merchantAccountId: "default",
  giftCardService: {
    id: "35b60feec-a7c7-4844-b503-f39b09192d81",
    giftCardServiceDefinitionId: "qwikcilver-gift-card",
    displayName: "Qwikcilver USA",
  },
  giftCardServicePaymentIssuanceId: "12345",
  url: "https://example.com/gift_card_issuance/ABCD1234",
  amount: 5000,
  currency: "EUR",
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"gift-card-issuance"*                                                                        | :heavy_minus_sign:                                                                            | Always `gift-card-issuance`.                                                                  | gift-card-issuance                                                                            |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID for the gift card issuance.                                                            | 356d56e5-fe16-42ae-97ee-8d55d846ae2e                                                          |
| `merchantAccountId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the merchant account this gift card issuance belongs to.                            | default                                                                                       |
| `giftCardService`                                                                             | [components.GiftCardService](../../models/components/giftcardservice.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `giftCardServicePaymentIssuanceId`                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | The identifier for this issuance as provided by the gift card service.                        | 12345                                                                                         |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The URL for the issued gift card.                                                             | https://example.com/gift_card_issuance/ABCD1234                                               |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The amount loaded onto the gift card, in the smallest denomination for the currency.          | 5000                                                                                          |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The ISO-4217 currency code for the `amount`.                                                  | **Example 1:** EUR<br/>**Example 2:** GBP<br/>**Example 3:** USD                              |
| `externalIdentifier`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The external identifier provided when issuing the gift card.                                  | order-12345                                                                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when this gift card was issued.                                             | 2013-07-16T19:23:00.000+00:00                                                                 |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when this gift card issuance was last updated.                              | 2013-07-16T19:23:00.000+00:00                                                                 |