# PaymentServiceTokenCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { PaymentServiceTokenCreate } from "@gr4vy/sdk/models/components";

let value: PaymentServiceTokenCreate = {
  securityCode: "123",
  paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
  redirectUrl: "https://example.com/callback",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `securityCode`                                                                                    | *string*                                                                                          | :heavy_minus_sign:                                                                                | The 3 or 4 digit security code often found on the card. This often referred to as the CVV or CVD. | 123                                                                                               |
| `paymentServiceId`                                                                                | *string*                                                                                          | :heavy_check_mark:                                                                                | The ID of the payment method to use.                                                              | fffd152a-9532-4087-9a4f-de58754210f0                                                              |
| `redirectUrl`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | The redirect URL to redirect a buyer to after they have authorized the payment method.            | https://example.com/callback                                                                      |