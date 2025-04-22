# PaymentMethodStoredCard

## Example Usage

```typescript
import { PaymentMethodStoredCard } from "@gr4vy/sdk/models/components";

let value: PaymentMethodStoredCard = {
  id: "852b951c-d7ea-4c98-b09e-4a1c9e97c077",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `method`                             | *string*                             | :heavy_minus_sign:                   | Set to `id` to use a stored card.    | id                                   |
| `id`                                 | *string*                             | :heavy_check_mark:                   | The ID of the stored card to use.    | 852b951c-d7ea-4c98-b09e-4a1c9e97c077 |