# CheckoutSessionPaymentMethod

Details about the payment method for card type only.

## Example Usage

```typescript
import { CheckoutSessionPaymentMethod } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionPaymentMethod = {
    type: "payment_method",
    method: "card",
    scheme: "visa",
    label: "4242",
    details: {
        bin: "411111",
        cardType: "credit",
        cardCountry: "US",
    },
    fingerprint: "20eb353620155d2b5fc864cc46a73ea77cb92c725238650839da1813fa987a17",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | payment_method                                                                         |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | Unique ID for the payment method.                                                      |                                                                                        |
| `method`                                                                               | [components.CheckoutSessionMethod](../../models/components/checkoutsessionmethod.md)   | :heavy_minus_sign:                                                                     | Payment method type.                                                                   | card                                                                                   |
| `scheme`                                                                               | [components.CheckoutSessionScheme](../../models/components/checkoutsessionscheme.md)   | :heavy_minus_sign:                                                                     | The scheme/brand of the card.                                                          | visa                                                                                   |
| `label`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | Last four digits of PAN.                                                               | 4242                                                                                   |
| `details`                                                                              | [components.CheckoutSessionDetails](../../models/components/checkoutsessiondetails.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `fingerprint`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | The unique hash derived from the payment method identifier (e.g. card number).         | 20eb353620155d2b5fc864cc46a73ea77cb92c725238650839da1813fa987a17                       |