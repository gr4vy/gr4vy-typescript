# CreateTransactionRefundRequest

## Example Usage

```typescript
import { CreateTransactionRefundRequest } from "@gr4vy/sdk/models/operations";

let value: CreateTransactionRefundRequest = {
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  transactionRefundCreate: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `transactionId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | 7099948d-7286-47e4-aad8-b68f7eb44591                                                     |
| `merchantAccountId`                                                                      | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the merchant account to use for this request.                                  |                                                                                          |
| `transactionRefundCreate`                                                                | [components.TransactionRefundCreate](../../models/components/transactionrefundcreate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |