# CheckoutSessionPaymentMethodDetails

## Example Usage

```typescript
import { CheckoutSessionPaymentMethodDetails } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionPaymentMethodDetails = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `bin`                                                      | *string*                                                   | :heavy_minus_sign:                                         | The first 6 digit of the card.                             | 411111                                                     |
| `cardCountry`                                              | *string*                                                   | :heavy_minus_sign:                                         | The country of the card issuer.                            | US                                                         |
| `cardType`                                                 | [components.CardType](../../models/components/cardtype.md) | :heavy_minus_sign:                                         | The payment scheme of the card.                            |                                                            |
| `cardIssuerName`                                           | *string*                                                   | :heavy_minus_sign:                                         | The card issuer.                                           | Bank of America NA                                         |