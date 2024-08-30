# ProvisionPaymentServiceTokenRequest

## Example Usage

```typescript
import { ProvisionPaymentServiceTokenRequest } from "@gr4vy/sdk/models/operations";

let value: ProvisionPaymentServiceTokenRequest = {
    paymentMethodId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    paymentServiceTokenRequest: {
        securityCode: "123",
        paymentServiceId: "a7d6b829-aea5-407d-ab7f-138784b5ad2c",
        redirectUrl: "https://example.com/callback",
    },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `paymentMethodId`                                                                              | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the payment method.                                                                  | 46973e9d-88a7-44a6-abfe-be4ff0134ff4                                                           |
| `paymentServiceTokenRequest`                                                                   | [components.PaymentServiceTokenRequest](../../models/components/paymentservicetokenrequest.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |