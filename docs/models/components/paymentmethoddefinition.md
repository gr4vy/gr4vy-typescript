# PaymentMethodDefinition

Definitions of a payment method including icon, label, etc.

## Example Usage

```typescript
import { PaymentMethodDefinition } from "@gr4vy/sdk/models/components";

let value: PaymentMethodDefinition = {
    id: "bank",
    iconUrl: "https://api.sandbox.example.gr4vy.app/assets/payment-method-definitions/bank.svg",
    displayName: "Bank",
    longDisplayName: "Bank (BACS)",
    method: "BACS",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | The mode of this payment method.                                                 | bank                                                                             |
| `iconUrl`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | The icon for this payment method.                                                | https://api.sandbox.example.gr4vy.app/assets/payment-method-definitions/bank.svg |
| `displayName`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | The display name of this payment method.                                         | Bank                                                                             |
| `longDisplayName`                                                                | *string*                                                                         | :heavy_minus_sign:                                                               | The long display name of this payment method.                                    | Bank (BACS)                                                                      |
| `method`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The method, or type, for this payment method.                                    | BACS                                                                             |