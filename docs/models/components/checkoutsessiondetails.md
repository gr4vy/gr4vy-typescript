# CheckoutSessionDetails

## Example Usage

```typescript
import { CheckoutSessionDetails } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionDetails = {
    bin: "411111",
    cardType: "credit",
    cardCountry: "US",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `bin`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | First six digits of PAN.                                                                 | 411111                                                                                   |
| `cardType`                                                                               | [components.CheckoutSessionCardType](../../models/components/checkoutsessioncardtype.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      | credit                                                                                   |
| `cardCountry`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | ISO 3166 two letter country code.                                                        | US                                                                                       |