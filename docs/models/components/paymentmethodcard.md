# PaymentMethodCard

Base model with JSON encoders.

## Example Usage

```typescript
import { PaymentMethodCard } from "@gr4vy/sdk/models/components";

let value: PaymentMethodCard = {
  method: "card",
  number: "4242424242424242",
  expirationDate: "12/30",
  cardScheme: "visa",
  externalIdentifier: "card-12345",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `method`                                                                                         | [components.PaymentMethodCardMethod](../../models/components/paymentmethodcardmethod.md)         | :heavy_minus_sign:                                                                               | Set to `card` to use a new card.                                                                 | card                                                                                             |
| `number`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | The 13-19 digit number for this card as it can be found on the front of the card.                | 4242424242424242                                                                                 |
| `expirationDate`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | The expiration date of the card, formatted `MM/YY`.                                              | 12/30                                                                                            |
| `cardScheme`                                                                                     | [components.PaymentMethodCardCardScheme](../../models/components/paymentmethodcardcardscheme.md) | :heavy_minus_sign:                                                                               | The optional card's network scheme.                                                              | visa                                                                                             |
| `externalIdentifier`                                                                             | *string*                                                                                         | :heavy_minus_sign:                                                                               | The merchant identifier for this card.                                                           | card-12345                                                                                       |