# TransactionEventCollection

Collection of results.

## Example Usage

```typescript
import { TransactionEventCollection } from "@gr4vy/sdk/models/components";

let value: TransactionEventCollection = {
    items: [
        {
            id: "3f73ef7f-bc7a-4bd7-8dd3-9c0f5d2cff7c",
            name: "<value>",
            createdAt: new Date("2023-06-30T03:22:57.117Z"),
            context: {},
        },
    ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.TransactionEvent](../../models/components/transactionevent.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `limit`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `nextCursor`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `previousCursor`                                                             | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |