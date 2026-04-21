# PaymentMethodUpdate

Request body for updating a stored payment method.

## Example Usage

```typescript
import { PaymentMethodUpdate } from "@gr4vy/sdk/models/components";

let value: PaymentMethodUpdate = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `expirationDate`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | The new expiration date for the payment method.                                  | 12/30                                                                            |
| `schemeTransactionId`                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | A scheme transaction identifier to associate with this payment method.           | 123456789012345                                                                  |
| `schemeTransactionIdScheme`                                                      | [components.CardScheme](../../models/components/cardscheme.md)                   | :heavy_minus_sign:                                                               | The scheme associated with scheme_transaction_id. Only applies to card payments. | visa                                                                             |