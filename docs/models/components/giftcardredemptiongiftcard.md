# GiftCardRedemptionGiftCard

The gift card used for this redemption

## Example Usage

```typescript
import { GiftCardRedemptionGiftCard } from "@gr4vy/sdk/models/components";

let value: GiftCardRedemptionGiftCard = {
  type: "gift-card",
  id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
  bin: "412345",
  subBin: "554",
  last4: "1234",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.GiftCardRedemptionGiftCardType](../../models/components/giftcardredemptiongiftcardtype.md) | :heavy_minus_sign:                                                                                     | Always `gift-card`.                                                                                    | gift-card                                                                                              |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The ID for the gift card.                                                                              | 356d56e5-fe16-42ae-97ee-8d55d846ae2e                                                                   |
| `bin`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | The first 6 digits of the full gift card number.                                                       | 412345                                                                                                 |
| `subBin`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | The 3 digits after the `bin` of the full gift card number.                                             | 554                                                                                                    |
| `last4`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The last 4 digits for the gift card.                                                                   | 1234                                                                                                   |