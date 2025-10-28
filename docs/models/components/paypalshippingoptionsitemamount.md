# PaypalShippingOptionsItemAmount

## Example Usage

```typescript
import { PaypalShippingOptionsItemAmount } from "@gr4vy/sdk/models/components";

let value: PaypalShippingOptionsItemAmount = {
  currencyCode: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `currencyCode`                                           | *string*                                                 | :heavy_check_mark:                                       | The three-character ISO currency code.                   | EUR                                                      |
| `value`                                                  | *string*                                                 | :heavy_check_mark:                                       | The amount value, which might include a decimal portion. | 10.00                                                    |