# GiftCardTransactionCreate

Create a charge against a gift card

## Example Usage

```typescript
import { GiftCardTransactionCreate } from "@gr4vy/sdk/models/components";

let value: GiftCardTransactionCreate = {
  number: "4123455541234561234",
  pin: "1234",
  amount: 1299,
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `number`                                                                                                                               | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The 16-19 digit number for the gift card.                                                                                              | 4123455541234561234                                                                                                                    |
| `pin`                                                                                                                                  | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The PIN for this gift card.                                                                                                            | 1234                                                                                                                                   |
| `amount`                                                                                                                               | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The monetary amount for this transaction to charge against the gift card, in the smallest currency unit (for example, cents or pence). | 1299                                                                                                                                   |