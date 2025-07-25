# GiftCardTokenTransactionCreate

## Example Usage

```typescript
import { GiftCardTokenTransactionCreate } from "@gr4vy/sdk/models/components";

let value: GiftCardTokenTransactionCreate = {
  id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
  amount: 1299,
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The ID for the gift card to charge.                                                                                                    | 356d56e5-fe16-42ae-97ee-8d55d846ae2e                                                                                                   |
| `amount`                                                                                                                               | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The monetary amount for this transaction to charge against the gift card, in the smallest currency unit (for example, cents or pence). | 1299                                                                                                                                   |