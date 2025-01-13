# RedirectPaymentMethodCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { RedirectPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: RedirectPaymentMethodCreate = {
  method: "zippay",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyerExternalIdentifier: "buyer-12345",
  country: "GB",
  currency: "GBP",
  redirectUrl: "https://intrepid-technician.info",
  externalIdentifier: "payment-method-12345",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `method`                                                                                                                | [components.RedirectPaymentMethodCreateMethod](../../models/components/redirectpaymentmethodcreatemethod.md)            | :heavy_check_mark:                                                                                                      | The method to use, this can be any of the methods that support redirect requests.                                       | paypal                                                                                                                  |
| `buyerId`                                                                                                               | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The `id` of a stored buyer to use Use this instead of the `buyer_external_identifier`.                                  | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                    |
| `buyerExternalIdentifier`                                                                                               | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The `external_identifier` of a stored buyer to use. Use this instead of the `buyer_id`.                                 | buyer-12345                                                                                                             |
| `country`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The 2-letter ISO code of the country to use this payment method for. This is used to select the payment service to use. | DE                                                                                                                      |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ISO-4217 currency code to use this payment method for. This is used to select the payment service to use.           | EUR                                                                                                                     |
| `redirectUrl`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The redirect URL to redirect a buyer to after they have authorized the payment method.                                  |                                                                                                                         |
| `externalIdentifier`                                                                                                    | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The merchant identifier for this payment method.                                                                        | payment-method-12345                                                                                                    |