# TransactionStatusSummary

Base model with JSON encoders.

## Example Usage

```typescript
import { TransactionStatusSummary } from "@gr4vy/sdk/models/components";

let value: TransactionStatusSummary = {
  type: "transaction",
  id: "7099948d-7286-47e4-aad8-b68f7eb44591",
  status: "authorization_succeeded",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [components.TransactionStatusSummaryType](../../models/components/transactionstatussummarytype.md)                           | :heavy_minus_sign:                                                                                                           | Always `transaction`.                                                                                                        | transaction                                                                                                                  |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The ID for the transaction.                                                                                                  | 7099948d-7286-47e4-aad8-b68f7eb44591                                                                                         |
| `status`                                                                                                                     | [components.TransactionStatusSummaryTransactionStatus](../../models/components/transactionstatussummarytransactionstatus.md) | :heavy_check_mark:                                                                                                           | The status of the transaction.                                                                                               | authorization_succeeded                                                                                                      |