# GiftCardsSummary

A list of gift cards in a short format including the latest balance.

## Example Usage

```typescript
import { GiftCardsSummary } from "@gr4vy/sdk/models/components";

let value: GiftCardsSummary = {
    items: [
        {
            type: "gift-card",
            id: "e6cdf979-87e2-4796-8ff6-9784d5aed893",
            merchantAccountId: "default",
            bin: "412345",
            subBin: "554",
            last4: "1234",
            expirationDate: new Date("2013-07-16T19:23:00.000+00:00"),
            balance: 1299,
            currency: "USD",
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
| `items`                                                                    | [components.GiftCardSummary](../../models/components/giftcardsummary.md)[] | :heavy_minus_sign:                                                         | A list of stored gift cards.                                               |