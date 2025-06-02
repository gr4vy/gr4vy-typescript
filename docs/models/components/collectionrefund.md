# CollectionRefund

## Example Usage

```typescript
import { CollectionRefund } from "@gr4vy/sdk/models/components";

let value: CollectionRefund = {
  items: [
    {
      id: "6a1d4e46-14ed-4fe1-a45f-eff4e025d211",
      transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
      status: "failed",
      currency: "EUR",
      amount: 1299,
      targetType: "gift-card-redemption",
      reconciliationId: "7jZXl4gBUNl0CnaLEnfXbt",
      transactionReconciliationId: "aLEnfXbt7jZXl4gBUNl0Cn",
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [components.Refund](../../models/components/refund.md)[] | :heavy_check_mark:                                       | A list of items returned for this request.               |                                                          |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | The number of items for this page.                       | 20                                                       |
| `nextCursor`                                             | *string*                                                 | :heavy_minus_sign:                                       | The cursor pointing at the next page of items.           | ZXhhbXBsZTE                                              |
| `previousCursor`                                         | *string*                                                 | :heavy_minus_sign:                                       | The cursor pointing at the previous page of items.       | Xkjss7asS                                                |