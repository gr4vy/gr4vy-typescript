# CollectionPayoutSummary

## Example Usage

```typescript
import { CollectionPayoutSummary } from "@gr4vy/sdk/models/components";

let value: CollectionPayoutSummary = {
  items: [
    {
      amount: 1299,
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      currency: "USD",
      paymentMethod: {
        method: "googlepay",
      },
      paymentService: {
        paymentServiceDefinitionId: "nuvei-card",
      },
      status: "succeeded",
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.PayoutSummary](../../models/components/payoutsummary.md)[] | :heavy_check_mark:                                                     | A list of items returned for this request.                             |                                                                        |
| `limit`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | The number of items for this page.                                     | 20                                                                     |
| `nextCursor`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | The cursor pointing at the next page of items.                         | ZXhhbXBsZTE                                                            |
| `previousCursor`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | The cursor pointing at the previous page of items.                     | Xkjss7asS                                                              |