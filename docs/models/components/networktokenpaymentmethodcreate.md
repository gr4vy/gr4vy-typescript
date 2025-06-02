# NetworkTokenPaymentMethodCreate

## Example Usage

```typescript
import { NetworkTokenPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: NetworkTokenPaymentMethodCreate = {
  token: "4111123456789012",
  expirationDate: "12/30",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `method`                                                              | *string*                                                              | :heavy_check_mark:                                                    | Always `network-token`.                                               | network-token                                                         |
| `token`                                                               | *string*                                                              | :heavy_check_mark:                                                    | The scheme token.                                                     | 4111123456789012                                                      |
| `expirationDate`                                                      | *string*                                                              | :heavy_check_mark:                                                    | The expiration date of the token.                                     | 12/30                                                                 |
| `cryptogram`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | The payment cryptogram for the network token.                         | A3F9C2D47E1B56A9                                                      |
| `redirectUrl`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The URL to redirect a user back to after the complete 3DS in browser. |                                                                       |
| `cardSource`                                                          | [components.CardSource](../../models/components/cardsource.md)        | :heavy_minus_sign:                                                    | The optional source of the decrypted device token.                    | apple-pay                                                             |
| `cardScheme`                                                          | [components.CardScheme](../../models/components/cardscheme.md)        | :heavy_minus_sign:                                                    | The original card scheme for which the token was generated.           | visa                                                                  |
| `cardSuffix`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | The last 4 digits of the original card used to generate the token.    | 1234                                                                  |
| `cardholderName`                                                      | *string*                                                              | :heavy_minus_sign:                                                    | The card holder name associated to the original card for the token.   | John Luhn                                                             |
| `eci`                                                                 | *string*                                                              | :heavy_minus_sign:                                                    | The ecommerce indicator for the token.                                | 05                                                                    |