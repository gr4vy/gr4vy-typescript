# PaymentMethodDetails

Details for credit or debit card payment method.

## Example Usage

```typescript
import { PaymentMethodDetails } from "@gr4vy/sdk/models/components";

let value: PaymentMethodDetails = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `bin`                                                      | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `cardType`                                                 | [components.CardType](../../models/components/cardtype.md) | :heavy_minus_sign:                                         | An enumeration.                                            |
| `cardIssuerName`                                           | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |