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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `currencyCode`                                                   | *string*                                                         | :heavy_check_mark:                                               | The three-character ISO currency code.                           | **Example 1:** EUR<br/>**Example 2:** GBP<br/>**Example 3:** USD |
| `value`                                                          | *string*                                                         | :heavy_check_mark:                                               | The amount value, which might include a decimal portion.         | 10.00                                                            |