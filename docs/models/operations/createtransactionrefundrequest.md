# CreateTransactionRefundRequest

## Example Usage

```typescript
import { CreateTransactionRefundRequest } from "@gr4vy/sdk/models/operations";

let value: CreateTransactionRefundRequest = {
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  transactionRefundCreate: {
    amount: 1299,
    targetType: "payment-method",
    targetId: "7a6c366d-9205-45ab-8021-0d9ee37f20f2",
    reason: "Refund due to user request.",
    externalIdentifier: "refund-12345",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `transactionId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | 7099948d-7286-47e4-aad8-b68f7eb44591                                                     |
| `transactionRefundCreate`                                                                | [components.TransactionRefundCreate](../../models/components/transactionrefundcreate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |