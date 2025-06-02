# ClickToPayPaymentMethodCreate

Create a Click to Pay payment with a decrypted token and cryptogram. This
is mainly used internally but can be used by anyone with their own C2P
integration.

## Example Usage

```typescript
import { ClickToPayPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: ClickToPayPaymentMethodCreate = {
  token: "4111123456789012",
  cryptogram: "A3F9C2D47E1B56A9",
  expirationDate: "12/30",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `method`                                                              | *string*                                                              | :heavy_check_mark:                                                    | Aways `click-to-pay`.                                                 | click-to-pay                                                          |
| `token`                                                               | *string*                                                              | :heavy_check_mark:                                                    | The device token.                                                     | 4111123456789012                                                      |
| `cryptogram`                                                          | *string*                                                              | :heavy_check_mark:                                                    | The payment cryptogram for the device token.                          | A3F9C2D47E1B56A9                                                      |
| `expirationDate`                                                      | *string*                                                              | :heavy_check_mark:                                                    | The expiration date of the device token.                              | 12/30                                                                 |
| `buyerId`                                                             | *string*                                                              | :heavy_minus_sign:                                                    |  The ID of the buyer to associate this transaction to.                | fe26475d-ec3e-4884-9553-f7356683f7f9                                  |
| `buyerExternalIdentifier`                                             | *string*                                                              | :heavy_minus_sign:                                                    | The external identifier of the buyer to create a transaction for.     | buyer-12345                                                           |
| `externalIdentifier`                                                  | *string*                                                              | :heavy_minus_sign:                                                    | The external identifier of the payment method to filter by.           | payment-method-12345                                                  |
| `redirectUrl`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The URL to redirect a user back to after the complete 3DS in browser. |                                                                       |