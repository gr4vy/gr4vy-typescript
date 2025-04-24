# ListPaymentOptionsRequest

## Example Usage

```typescript
import { ListPaymentOptionsRequest } from "@gr4vy/sdk/models/operations";

let value: ListPaymentOptionsRequest = {
  paymentOptionRequest: {
    metadata: {
      "cohort": "a",
    },
    country: "US",
    currency: "USD",
    amount: 1299,
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
        sellerCountry: "GB",
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `merchantAccountId`                                                                | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of the merchant account to use for this request.                            |
| `paymentOptionRequest`                                                             | [components.PaymentOptionRequest](../../models/components/paymentoptionrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |