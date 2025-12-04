# AddPaymentLinkRequest

## Example Usage

```typescript
import { AddPaymentLinkRequest } from "@gr4vy/sdk/models/operations";

let value: AddPaymentLinkRequest = {
  paymentLinkCreate: {
    amount: 1299,
    country: "DE",
    currency: "EUR",
    store: true,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `merchantAccountId`                                                          | *string*                                                                     | :heavy_minus_sign:                                                           | The ID of the merchant account to use for this request.                      |
| `paymentLinkCreate`                                                          | [components.PaymentLinkCreate](../../models/components/paymentlinkcreate.md) | :heavy_check_mark:                                                           | N/A                                                                          |