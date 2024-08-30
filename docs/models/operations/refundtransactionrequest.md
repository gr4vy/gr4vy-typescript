# RefundTransactionRequest

## Example Usage

```typescript
import { RefundTransactionRequest } from "@gr4vy/sdk/models/operations";

let value: RefundTransactionRequest = {
    transactionId: "7537a8cd-9e73-419c-977d-525f77b114ee",
    transactionRefundCreate: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `transactionId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `transactionRefundCreate`                                                                | [components.TransactionRefundCreate](../../models/components/transactionrefundcreate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |