# CreatePaymentMethodPaymentServiceTokenRequest

## Example Usage

```typescript
import { CreatePaymentMethodPaymentServiceTokenRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentMethodPaymentServiceTokenRequest = {
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  paymentServiceTokenCreate: {
    securityCode: "123",
    paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
    redirectUrl: "https://example.com/callback",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `paymentMethodId`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the payment method                                                                 | ef9496d8-53a5-4aad-8ca2-00eb68334389                                                         |
| `paymentServiceTokenCreate`                                                                  | [components.PaymentServiceTokenCreate](../../models/components/paymentservicetokencreate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |