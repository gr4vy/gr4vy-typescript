# PazePaymentMethodCreate

Create a Paze transaction with a device token.

## Example Usage

```typescript
import { PazePaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: PazePaymentMethodCreate = {
  method: "paze",
  token: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `buyerExternalIdentifier`                                             | *string*                                                              | :heavy_minus_sign:                                                    | The external identifier of the buyer to create a payment for.         | buyer-12345                                                           |
| `buyerId`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | The ID of the buyer to retrieve billing details for.                  | fe26475d-ec3e-4884-9553-f7356683f7f9                                  |
| `cardholderName`                                                      | *string*                                                              | :heavy_minus_sign:                                                    | The card holder name associated to the original card for the token.   | John Luhn                                                             |
| `redirectUrl`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The URL to redirect a user back to after the complete 3DS in browser. | https://example.com                                                   |
| `cardSuffix`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | The last 4 digits of the original card used to generate the token.    | 1234                                                                  |
| `cardScheme`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | The original card scheme for which the token was generated.           | visa                                                                  |
| `cardType`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | The payment scheme of the card.                                       | credit                                                                |
| `method`                                                              | *"paze"*                                                              | :heavy_check_mark:                                                    | Always `paze`                                                         | paze                                                                  |
| `token`                                                               | *components.PazePaymentMethodCreateToken*                             | :heavy_check_mark:                                                    | The opaque token as received from the Paze complete response.         |                                                                       |