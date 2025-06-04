# TransactionSummaries

## Example Usage

```typescript
import { TransactionSummaries } from "@gr4vy/sdk/models/components";

let value: TransactionSummaries = {
  items: [
    {
      id: "7099948d-7286-47e4-aad8-b68f7eb44591",
      reconciliationId: "default",
      merchantAccountId: "default",
      currency: "EUR",
      amount: 1299,
      status: "authorization_void_pending",
      authorizedAmount: 1299,
      capturedAmount: 1299,
      refundedAmount: 1299,
      settledAmount: 1100,
      settled: true,
      intent: "capture",
      giftCardRedemptions: [
        {
          id: "31e65fb1-9c67-432e-9c06-83300b9d4059",
          status: "created",
          amount: 100,
          refundedAmount: 50,
          giftCard: {
            bin: "412345",
            subBin: "554",
            last4: "1234",
          },
        },
      ],
      createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
      updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.TransactionSummary](../../models/components/transactionsummary.md)[] | :heavy_check_mark:                                                               | A list of items returned for this request.                                       |                                                                                  |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | The number of items for this page.                                               | 20                                                                               |
| `nextCursor`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | The cursor pointing at the next page of items.                                   | ZXhhbXBsZTE                                                                      |
| `previousCursor`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | The cursor pointing at the previous page of items.                               | Xkjss7asS                                                                        |