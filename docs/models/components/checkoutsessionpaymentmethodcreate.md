# CheckoutSessionPaymentMethodCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { CheckoutSessionPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionPaymentMethodCreate = {
  method: "checkout-session",
  id: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
  externalIdentifier: "card-12345",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyerExternalIdentifier: "buyer-12345",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `method`                                                                                                                   | [components.CheckoutSessionPaymentMethodCreateMethod](../../models/components/checkoutsessionpaymentmethodcreatemethod.md) | :heavy_minus_sign:                                                                                                         | Always `checkout-session`                                                                                                  | checkout-session                                                                                                           |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID for the checkout session.                                                                                           | 4137b1cf-39ac-42a8-bad6-1c680d5dab6b                                                                                       |
| `externalIdentifier`                                                                                                       | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The merchant reference that can be used to match the payment method against your own records.                              | card-12345                                                                                                                 |
| `buyerId`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The `id` of a stored buyer to use Use this instead of the `buyer_external_identifier`.                                     | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                       |
| `buyerExternalIdentifier`                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The `external_identifier` of a stored buyer to use. Use this instead of the `buyer_id`.                                    | buyer-12345                                                                                                                |