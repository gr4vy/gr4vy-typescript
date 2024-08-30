# TransactionCard

A credit or debit card payment method.

## Example Usage

```typescript
import { TransactionCard } from "@gr4vy/sdk/models/components";

let value: TransactionCard = {
    cardType: "credit",
    bin: "412345",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `cardType`                                                                       | [components.TransactionCardType](../../models/components/transactioncardtype.md) | :heavy_minus_sign:                                                               | The type of card, one of `credit`, `debit` or `prepaid`.                         | credit                                                                           |
| `bin`                                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | The first 6 digits of the full card number (the BIN).                            | 412345                                                                           |