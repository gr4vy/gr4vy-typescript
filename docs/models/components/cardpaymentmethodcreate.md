# CardPaymentMethodCreate

Card

Card details to use in a transaction or to register a new payment method.

## Example Usage

```typescript
import { CardPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: CardPaymentMethodCreate = {
  expirationDate: "12/30",
  number: "4111111111111111",
  buyerExternalIdentifier: "buyer-12345",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  externalIdentifier: "payment-method-12345",
  cardType: "credit",
  method: "card",
  securityCode: "123",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `expirationDate`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | The expiration date of the card, formatted `MM/YY`.                                                  | 12/30                                                                                                |
| `number`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | The 13-19 digit number for this card.                                                                | 4111111111111111                                                                                     |
| `buyerExternalIdentifier`                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The external identifier of the buyer to attach the method to.                                        | buyer-12345                                                                                          |
| `buyerId`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the buyer to attach the method to.                                                         | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                 |
| `externalIdentifier`                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The merchant reference for this payment method.                                                      | payment-method-12345                                                                                 |
| `cardType`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The type of the card used                                                                            | credit                                                                                               |
| `method`                                                                                             | [components.CardPaymentMethodCreateMethod](../../models/components/cardpaymentmethodcreatemethod.md) | :heavy_minus_sign:                                                                                   | Always `card`                                                                                        | card                                                                                                 |
| `securityCode`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The 3 or 4 digit security code often found on the card. This often referred to as the CVV or CVD.    | 123                                                                                                  |