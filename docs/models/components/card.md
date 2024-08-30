# Card

A credit or debit card payment method.

## Example Usage

```typescript
import { Card } from "@gr4vy/sdk/models/components";

let value: Card = {
    cardType: "credit",
    bin: "412345",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `cardType`                                                                                     | [components.TransactionSummaryCardType](../../models/components/transactionsummarycardtype.md) | :heavy_minus_sign:                                                                             | The type of card, one of `credit`, `debit` or `prepaid`.                                       | credit                                                                                         |
| `bin`                                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | The first 6 digits of the full card number (the BIN).                                          | 412345                                                                                         |