# TransactionTaxID

The tax information associated with the billing details.

## Example Usage

```typescript
import { TransactionTaxID } from "@gr4vy/sdk/models/components";

let value: TransactionTaxID = {
    value: "12345678931",
    kind: "gb.vat",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `value`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The tax ID for the buyer.                                                | 12345678931                                                              |
| `kind`                                                                   | [components.TransactionKind](../../models/components/transactionkind.md) | :heavy_check_mark:                                                       | The kind of tax ID.                                                      | gb.vat                                                                   |