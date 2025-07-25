# GetTransactionRefundRequest

## Example Usage

```typescript
import { GetTransactionRefundRequest } from "@gr4vy/sdk/models/operations";

let value: GetTransactionRefundRequest = {
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  refundId: "6a1d4e46-14ed-4fe1-a45f-eff4e025d211",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `transactionId`                                         | *string*                                                | :heavy_check_mark:                                      | The ID of the transaction                               | 7099948d-7286-47e4-aad8-b68f7eb44591                    |
| `refundId`                                              | *string*                                                | :heavy_check_mark:                                      | The ID of the refund                                    | 6a1d4e46-14ed-4fe1-a45f-eff4e025d211                    |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |