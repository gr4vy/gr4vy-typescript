# TokenPaymentMethodCreate

Create a transaction with the ID (token) of a stored payment method (and an optional URL for approval)

## Example Usage

```typescript
import { TokenPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: TokenPaymentMethodCreate = {
  id: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `id`                                                                                              | *string*                                                                                          | :heavy_check_mark:                                                                                | The ID for the payment method.                                                                    | ef9496d8-53a5-4aad-8ca2-00eb68334389                                                              |
| `method`                                                                                          | *"id"*                                                                                            | :heavy_minus_sign:                                                                                | Always `id`.                                                                                      | id                                                                                                |
| `securityCode`                                                                                    | *string*                                                                                          | :heavy_minus_sign:                                                                                | The 3 or 4 digit security code often found on the card. This often referred to as the CVV or CVD. | 123                                                                                               |
| `redirectUrl`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | The URL to redirect a user back to after they approve the transaction in the browser.             |                                                                                                   |