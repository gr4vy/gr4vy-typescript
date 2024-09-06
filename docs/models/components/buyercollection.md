# BuyerCollection

Collection of results.

## Example Usage

```typescript
import { BuyerCollection } from "@gr4vy/sdk/models/components";

let value: BuyerCollection = {
    items: [
        {
            merchantAccountId: "<value>",
            billingDetails: {
                phoneNumber: "+14155552671",
                address: {
                    country: "US",
                    stateCode: "GB-LND",
                },
            },
            createdAt: new Date("2023-07-03T00:41:29.875Z"),
            updatedAt: new Date("2023-11-13T03:22:04.837Z"),
        },
    ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `items`                                                | [components.Buyer](../../models/components/buyer.md)[] | :heavy_check_mark:                                     | A page of items returned for this request              |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | The number of items for this page                      |
| `nextCursor`                                           | *string*                                               | :heavy_minus_sign:                                     | The cursor pointing at the next page of items.         |
| `previousCursor`                                       | *string*                                               | :heavy_minus_sign:                                     | The cursor pointing at the previous page of items.     |