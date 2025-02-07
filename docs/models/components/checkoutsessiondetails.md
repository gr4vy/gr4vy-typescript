# CheckoutSessionDetails

Details for credit or debit card payment method.

## Example Usage

```typescript
import { CheckoutSessionDetails } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionDetails = {
  bin: "411111",
  cardCountry: "GB",
  cardType: "credit",
  cardIssuerName: "Bank of America NA",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `bin`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | The first 6 digit of the card.                                                           | 411111                                                                                   |
| `cardCountry`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | The country of the card issuer.                                                          | DE                                                                                       |
| `cardType`                                                                               | [components.CheckoutSessionCardType](../../models/components/checkoutsessioncardtype.md) | :heavy_minus_sign:                                                                       | The payment scheme of the card.                                                          | credit                                                                                   |
| `cardIssuerName`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | The card issuer.                                                                         | Bank of America NA                                                                       |