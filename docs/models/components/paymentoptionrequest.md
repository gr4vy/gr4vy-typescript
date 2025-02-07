# PaymentOptionRequest

Base model with JSON encoders.

## Example Usage

```typescript
import { PaymentOptionRequest } from "@gr4vy/sdk/models/components";

let value: PaymentOptionRequest = {
  metadata: {},
  country: "GB",
  currency: "USD",
  amount: 1299,
  locale: "en",
  cartItems: [
    {
      name: "GoPro HD",
      quantity: 2,
      unitAmount: 1299,
      discountAmount: 0,
      taxAmount: 0,
      externalIdentifier: "goprohd",
      sku: "GPHD1078",
      productUrl: "https://example.com/catalog/go-pro-hd",
      imageUrl: "https://example.com/images/go-pro-hd.jpg",
      categories: [
        "camera",
        "travel",
        "gear",
      ],
      productType: "physical",
    },
  ],
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                                    | [components.Metadata](../../models/components/metadata.md)                                                                    | :heavy_minus_sign:                                                                                                            | The metadata to used to evaluate checkout rules, which will help determine the right payment options to display.              | {<br/>"cohort": "a"<br/>}                                                                                                     |
| `country`                                                                                                                     | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The country code used to evaluate checkout rules, and which are used to help determine the right payment options to display.  | DE                                                                                                                            |
| `currency`                                                                                                                    | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The currency code used to evaluate checkout rules, and which are used to help determine the right payment options to display. | EUR                                                                                                                           |
| `amount`                                                                                                                      | *number*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The amount used to evaluate checkout rules, and which are used to help determine the right payment options to display.        | 1299                                                                                                                          |
| `locale`                                                                                                                      | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The locale used to determine the labels for each payment option.                                                              | en                                                                                                                            |
| `cartItems`                                                                                                                   | [components.CartItem](../../models/components/cartitem.md)[]                                                                  | :heavy_minus_sign:                                                                                                            | The cart items used to evaluate checkout rules, and which are used to help determine the right payment options to display.    |                                                                                                                               |