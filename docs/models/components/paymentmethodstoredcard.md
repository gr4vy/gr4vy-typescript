# PaymentMethodStoredCard

Base model with JSON encoders.

## Example Usage

```typescript
import { PaymentMethodStoredCard } from "@gr4vy/sdk/models/components";

let value: PaymentMethodStoredCard = {
  method: "id",
  id: "852b951c-d7ea-4c98-b09e-4a1c9e97c077",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `method`                                                                                             | [components.PaymentMethodStoredCardMethod](../../models/components/paymentmethodstoredcardmethod.md) | :heavy_minus_sign:                                                                                   | Set to `id` to use a stored card.                                                                    | id                                                                                                   |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the stored card to use.                                                                    | 852b951c-d7ea-4c98-b09e-4a1c9e97c077                                                                 |