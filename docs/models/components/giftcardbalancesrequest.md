# GiftCardBalancesRequest

A request to check the balance for a set of stored and
non-stored gift cards.

## Example Usage

```typescript
import { GiftCardBalancesRequest } from "@gr4vy/sdk/models/components";

let value: GiftCardBalancesRequest = {
    items: [
        {
            id: "e6cdf979-87e2-4796-8ff6-9784d5aed893",
        },
    ],
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                             | *components.GiftCardBalancesRequestItems*[]                                                                                         | :heavy_minus_sign:                                                                                                                  | One or more gift cards to check balances for, up to a default limit<br/>of 10 gift cards. Please contact our team to change this limit. |