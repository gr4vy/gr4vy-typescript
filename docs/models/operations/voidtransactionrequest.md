# VoidTransactionRequest

## Example Usage

```typescript
import { VoidTransactionRequest } from "@gr4vy/sdk/models/operations";

let value: VoidTransactionRequest = {
  transactionId: "4eb4bef9-43e1-47c9-92b1-2c748c29fe5a",
  xGr4vyMerchantAccountId: "default",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `transactionId`                                         | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |                                                         |
| `timeoutInSeconds`                                      | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `xGr4vyMerchantAccountId`                               | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. | default                                                 |