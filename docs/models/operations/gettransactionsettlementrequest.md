# GetTransactionSettlementRequest

## Example Usage

```typescript
import { GetTransactionSettlementRequest } from "@gr4vy/sdk/models/operations";

let value: GetTransactionSettlementRequest = {
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
  settlementId: "b1e2c3d4-5678-1234-9abc-1234567890ab",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `transactionId`                                         | *string*                                                | :heavy_check_mark:                                      | The unique identifier of the transaction.               | 7099948d-7286-47e4-aad8-b68f7eb44591                    |
| `settlementId`                                          | *string*                                                | :heavy_check_mark:                                      | The unique identifier of the settlement.                | b1e2c3d4-5678-1234-9abc-1234567890ab                    |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |