# CheckoutSessionPaymentMethod

## Example Usage

```typescript
import { CheckoutSessionPaymentMethod } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionPaymentMethod = {
  id: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  details: {
    bin: "411111",
    cardCountry: "US",
    cardIssuerName: "Bank of America NA",
  },
  label: "1234",
  scheme: "visa",
  fingerprint:
    "a50b85c200ee0795d6fd33a5c66f37a4564f554355c5b46a756aac485dd168a4",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Always `payment-method`                                                                                          | payment-method                                                                                                   |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The ID of the payment method.                                                                                    | ef9496d8-53a5-4aad-8ca2-00eb68334389                                                                             |
| `details`                                                                                                        | [components.CheckoutSessionPaymentMethodDetails](../../models/components/checkoutsessionpaymentmethoddetails.md) | :heavy_minus_sign:                                                                                               | Details for credit or debit card payment method.                                                                 |                                                                                                                  |
| `label`                                                                                                          | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The last 4 digits of the the card.                                                                               | 1234                                                                                                             |
| `method`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Always `card`                                                                                                    | card                                                                                                             |
| `scheme`                                                                                                         | [components.CardScheme](../../models/components/cardscheme.md)                                                   | :heavy_minus_sign:                                                                                               | The scheme of the card.                                                                                          | visa                                                                                                             |
| `fingerprint`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The unique hash derived from the card number.                                                                    | a50b85c200ee0795d6fd33a5c66f37a4564f554355c5b46a756aac485dd168a4                                                 |