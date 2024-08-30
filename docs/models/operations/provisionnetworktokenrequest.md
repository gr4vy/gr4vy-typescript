# ProvisionNetworkTokenRequest

## Example Usage

```typescript
import { ProvisionNetworkTokenRequest } from "@gr4vy/sdk/models/operations";

let value: ProvisionNetworkTokenRequest = {
    paymentMethodId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    networkTokenRequest: {
        securityCode: "123",
        merchantInitiated: false,
        isSubsequentPayment: true,
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `paymentMethodId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the payment method.                                                    | 46973e9d-88a7-44a6-abfe-be4ff0134ff4                                             |
| `networkTokenRequest`                                                            | [components.NetworkTokenRequest](../../models/components/networktokenrequest.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |