# Settlements

A list of settlement records for a transaction.

## Example Usage

```typescript
import { Settlements } from "@gr4vy/sdk/models/components";

let value: Settlements = {
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
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Settlement](../../models/components/settlement.md)[] | :heavy_check_mark:                                               | The list of settlement objects.                                  |