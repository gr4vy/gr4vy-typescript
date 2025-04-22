# TransactionStatusSummary

## Example Usage

```typescript
import { TransactionStatusSummary } from "@gr4vy/sdk/models/components";

let value: TransactionStatusSummary = {
  id: "7099948d-7286-47e4-aad8-b68f7eb44591",
  status: "capture_succeeded",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Always `transaction`.                                                        | transaction                                                                  |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The ID for the transaction.                                                  | 7099948d-7286-47e4-aad8-b68f7eb44591                                         |
| `status`                                                                     | [components.TransactionStatus](../../models/components/transactionstatus.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |