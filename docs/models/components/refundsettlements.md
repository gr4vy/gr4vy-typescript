# RefundSettlements

A list of settlement records for the refunds on a transaction.

## Example Usage

```typescript
import { RefundSettlements } from "@gr4vy/sdk/models/components";

let value: RefundSettlements = {
  items: [
    {
      id: "b1e2c3d4-5678-1234-9abc-1234567890ab",
      merchantAccountId: "default",
      createdAt: new Date("2024-06-01T12:00:00.000Z"),
      updatedAt: new Date("2024-06-01T12:00:00.000Z"),
      postedAt: new Date("2024-06-01T12:00:00.000Z"),
      ingestedAt: new Date("2024-06-01T12:00:00.000Z"),
      currency: "EUR",
      amount: 1100,
      commission: 100,
      paymentServiceReportId: "a1b2c3d4-5678-1234-9abc-1234567890ab",
      paymentServiceReportFileIds: [
        "f1e2d3c4-5678-1234-9abc-1234567890ab",
      ],
      transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
      refundId: "b1e2c3d4-5678-1234-9abc-1234567890ab",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.RefundSettlement](../../models/components/refundsettlement.md)[] | :heavy_check_mark:                                                           | The list of refund settlement objects.                                       |