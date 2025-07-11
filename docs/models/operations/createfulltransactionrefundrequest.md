# CreateFullTransactionRefundRequest

## Example Usage

```typescript
import { CreateFullTransactionRefundRequest } from "@gr4vy/sdk/models/operations";

let value: CreateFullTransactionRefundRequest = {
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `transactionId`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the transaction                                                                      | 7099948d-7286-47e4-aad8-b68f7eb44591                                                           |
| `merchantAccountId`                                                                            | *string*                                                                                       | :heavy_minus_sign:                                                                             | The ID of the merchant account to use for this request.                                        |                                                                                                |
| `transactionRefundAllCreate`                                                                   | [components.TransactionRefundAllCreate](../../models/components/transactionrefundallcreate.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |