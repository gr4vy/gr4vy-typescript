# TransactionEventCollection

Collection of results.

## Example Usage

```typescript
import { TransactionEventCollection } from "@gr4vy/sdk/models/components";

let value: TransactionEventCollection = {
    items: [
        {
            id: "813f16d9-f5fc-4e6c-9561-46c3e250fb00",
            name: "<value>",
            createdAt: new Date("2023-08-08T16:16:52.132Z"),
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