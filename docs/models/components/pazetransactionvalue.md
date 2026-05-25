# PazeTransactionValue

## Example Usage

```typescript
import { PazeTransactionValue } from "@gr4vy/sdk/models/components";

let value: PazeTransactionValue = {
  transactionCurrency: "USD",
  transactionAmount: "5.39",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `transactionCurrency`                                               | *string*                                                            | :heavy_check_mark:                                                  | ISO 4217 currency code of the transaction.                          | USD                                                                 |
| `transactionAmount`                                                 | *string*                                                            | :heavy_check_mark:                                                  | Amount of the transaction including dollar and cents, e.g. '99.95'. | 5.39                                                                |