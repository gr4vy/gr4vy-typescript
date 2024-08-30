# TransactionStatusSummary

A transaction record.

## Example Usage

```typescript
import { TransactionStatusSummary } from "@gr4vy/sdk/models/components";

let value: TransactionStatusSummary = {
    type: "transaction",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    status: "processing",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                  | [components.TransactionStatusSummaryType](../../models/components/transactionstatussummarytype.md)      | :heavy_minus_sign:                                                                                      | The type of this resource. Is always `transaction`.                                                     | transaction                                                                                             |
| `id`                                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The unique identifier for this transaction.                                                             | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                    |
| `status`                                                                                                | [components.TransactionStatusSummaryStatus](../../models/components/transactionstatussummarystatus.md)  | :heavy_minus_sign:                                                                                      | The status of the transaction. The status may change over time as<br/>asynchronous processing events occur. | processing                                                                                              |