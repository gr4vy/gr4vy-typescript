# RefundTransactionRequest

## Example Usage

```typescript
import { RefundTransactionRequest } from "@gr4vy/sdk/models/operations";

let value: RefundTransactionRequest = {
    transactionId: "5ea944f3-b756-4c11-b6c3-7a5126243835",
    transactionRefundCreate: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `transactionId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `transactionRefundCreate`                                                                | [components.TransactionRefundCreate](../../models/components/transactionrefundcreate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |