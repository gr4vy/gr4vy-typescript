# VoidTransactionRequest

## Example Usage

```typescript
import { VoidTransactionRequest } from "@gr4vy/sdk/models/operations";

let value: VoidTransactionRequest = {
  transactionId: "7099948d-7286-47e4-aad8-b68f7eb44591",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `transactionId`                                         | *string*                                                | :heavy_check_mark:                                      | The ID of the transaction                               | 7099948d-7286-47e4-aad8-b68f7eb44591                    |
| `prefer`                                                | *string*[]                                              | :heavy_minus_sign:                                      | The preferred resource type in the response.            |                                                         |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |