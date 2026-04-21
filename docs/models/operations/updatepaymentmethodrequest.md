# UpdatePaymentMethodRequest

## Example Usage

```typescript
import { UpdatePaymentMethodRequest } from "@gr4vy/sdk/models/operations";

let value: UpdatePaymentMethodRequest = {
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  paymentMethodUpdate: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `paymentMethodId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the payment method                                                     | ef9496d8-53a5-4aad-8ca2-00eb68334389                                             |
| `merchantAccountId`                                                              | *string*                                                                         | :heavy_minus_sign:                                                               | The ID of the merchant account to use for this request.                          |                                                                                  |
| `paymentMethodUpdate`                                                            | [components.PaymentMethodUpdate](../../models/components/paymentmethodupdate.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |