# TransactionSummaryTaxId

The tax ID information associated with the billing details.

## Example Usage

```typescript
import { TransactionSummaryTaxId } from "@gr4vy/sdk/models/components";

let value: TransactionSummaryTaxId = {
  value: "12345678931",
  kind: "us.ein",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `value`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | The tax ID for the buyer.                                                                        | 12345678931                                                                                      |
| `kind`                                                                                           | [components.TransactionSummaryTaxIdKind](../../models/components/transactionsummarytaxidkind.md) | :heavy_check_mark:                                                                               | The kind of tax ID                                                                               | us.ein                                                                                           |