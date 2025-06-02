# CollectionPaymentMethod

## Example Usage

```typescript
import { CollectionPaymentMethod } from "@gr4vy/sdk/models/components";

let value: CollectionPaymentMethod = {
  items: [
    {
      method: "oney_4x",
      id: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
      merchantAccountId: "default",
      citUsageCount: 50,
      hasReplacement: false,
      usageCount: 100,
      status: "buyer_approval_required",
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.PaymentMethod](../../models/components/paymentmethod.md)[] | :heavy_check_mark:                                                     | A list of items returned for this request.                             |                                                                        |
| `limit`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | The number of items for this page.                                     | 20                                                                     |
| `nextCursor`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | The cursor pointing at the next page of items.                         | ZXhhbXBsZTE                                                            |
| `previousCursor`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | The cursor pointing at the previous page of items.                     | Xkjss7asS                                                              |