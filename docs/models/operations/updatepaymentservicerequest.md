# UpdatePaymentServiceRequest

## Example Usage

```typescript
import { UpdatePaymentServiceRequest } from "@gr4vy/sdk/models/operations";

let value: UpdatePaymentServiceRequest = {
    paymentServiceId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    paymentServiceUpdate: {
        displayName: "Stripe (Main)",
        fields: [
            {
                key: "private_key",
                value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
            },
        ],
        acceptedCountries: ["US", "GB", "DE"],
        acceptedCurrencies: ["EUR", "USD", "GBP"],
        threeDSecureEnabled: true,
        active: true,
        openLoop: true,
        paymentMethodTokenizationEnabled: true,
        networkTokensEnabled: true,
    },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `paymentServiceId`                                                                 | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the payment service.                                                     | 46973e9d-88a7-44a6-abfe-be4ff0134ff4                                               |
| `paymentServiceUpdate`                                                             | [components.PaymentServiceUpdate](../../models/components/paymentserviceupdate.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |