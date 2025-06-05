# ListTransactionSettlementsRequest

## Example Usage

```typescript
import { ListTransactionSettlementsRequest } from "@gr4vy/sdk/models/operations";

let value: ListTransactionSettlementsRequest = {
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `transactionId`                                         | *string*                                                | :heavy_check_mark:                                      | The unique identifier of the transaction.               | 7099948d-7286-47e4-aad8-b68f7eb44591                    |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |