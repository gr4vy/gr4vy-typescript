# Refunds

A list of refunds.

## Example Usage

```typescript
import { Refunds } from "@gr4vy/sdk/models/components";

let value: Refunds = {
    items: [
        {
            type: "refund",
            id: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
            transactionId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
            paymentServiceRefundId: "refund_xYqd43gySMtori",
            status: "processing",
            currency: "USD",
            amount: 1299,
            reason: "Refund due to user request",
            createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
            updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
            targetType: "payment-method",
            targetId: "c23ea83f-1b1c-4584-a0e8-78ef8c041949",
        },
    ],
    limit: 1,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: null,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                            | [components.Refund](../../models/components/refund.md)[]                                                           | :heavy_minus_sign:                                                                                                 | A list of refunds.                                                                                                 |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |