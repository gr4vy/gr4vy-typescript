# CheckoutSessionWithUrlPaymentMethodCreate

Create a payment with a checkout session ID (and an optional URL for 3DS).

## Example Usage

```typescript
import { CheckoutSessionWithUrlPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionWithUrlPaymentMethodCreate = {
  id: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `method`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Always `checkout-session`                                                                     | checkout-session                                                                              |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID for the checkout session.                                                              | 4137b1cf-39ac-42a8-bad6-1c680d5dab6b                                                          |
| `externalIdentifier`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The merchant reference that can be used to match the payment method against your own records. | card-12345                                                                                    |
| `buyerId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The `id` of a stored buyer to use Use this instead of the `buyer_external_identifier`.        | fe26475d-ec3e-4884-9553-f7356683f7f9                                                          |
| `buyerExternalIdentifier`                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The `external_identifier` of a stored buyer to use. Use this instead of the `buyer_id`.       | buyer-12345                                                                                   |
| `redirectUrl`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The URL to redirect a user back to after the complete 3DS in browser.                         |                                                                                               |