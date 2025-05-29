# CollectionTransactionEvent

## Example Usage

```typescript
import { CollectionTransactionEvent } from "@gr4vy/sdk/models/components";

let value: CollectionTransactionEvent = {
  items: [
    {
      id: "f133a3b7-e67e-4d83-bcd3-3e438fedf348",
      name: "transaction-api-request",
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      context: {
        "key": "<value>",
      },
    },
  ],
  nextCursor: "ZXhhbXBsZTE",
  previousCursor: "Xkjss7asS",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.TransactionEvent](../../models/components/transactionevent.md)[] | :heavy_check_mark:                                                           | A list of items returned for this request.                                   |                                                                              |
| `limit`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | The number of items for this page.                                           | 20                                                                           |
| `nextCursor`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | The cursor pointing at the next page of items.                               | ZXhhbXBsZTE                                                                  |
| `previousCursor`                                                             | *string*                                                                     | :heavy_minus_sign:                                                           | The cursor pointing at the previous page of items.                           | Xkjss7asS                                                                    |