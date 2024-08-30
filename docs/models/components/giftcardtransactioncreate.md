# GiftCardTransactionCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { GiftCardTransactionCreate } from "@gr4vy/sdk/models/components";

let value: GiftCardTransactionCreate = {
    number: "<value>",
    pin: "2215",
    amount: 807581,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `number`           | *string*           | :heavy_check_mark: | N/A                |
| `pin`              | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |