# CollectionNoCursorGiftCardSummary

## Example Usage

```typescript
import { CollectionNoCursorGiftCardSummary } from "@gr4vy/sdk/models/components";

let value: CollectionNoCursorGiftCardSummary = {
  items: [
    {
      type: "gift-card",
      id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
      merchantAccountId: "default",
      bin: "412345",
      subBin: "554",
      last4: "1234",
      currency: "EUR",
      expirationDate: new Date("2013-07-16T19:23:00.000+00:00"),
      balance: 1299,
      balanceErrorCode: "incorrect_currency",
      balanceRawErrorCode: "10363",
      balanceRawErrorMessage: "This currency is not supported by the merchant.",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.GiftCardSummary](../../models/components/giftcardsummary.md)[] | :heavy_check_mark:                                                         | A list of items returned for this request.                                 |