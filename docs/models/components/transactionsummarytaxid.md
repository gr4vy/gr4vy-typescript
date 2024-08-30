# TransactionSummaryTaxID

The tax information associated with the billing details.

## Example Usage

```typescript
import { TransactionSummaryTaxID } from "@gr4vy/sdk/models/components";

let value: TransactionSummaryTaxID = {
    value: "12345678931",
    kind: "gb.vat",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `value`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | The tax ID for the buyer.                                                              | 12345678931                                                                            |
| `kind`                                                                                 | [components.TransactionSummaryKind](../../models/components/transactionsummarykind.md) | :heavy_check_mark:                                                                     | The kind of tax ID.                                                                    | gb.vat                                                                                 |