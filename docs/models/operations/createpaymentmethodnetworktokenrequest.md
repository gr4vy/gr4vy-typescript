# CreatePaymentMethodNetworkTokenRequest

## Example Usage

```typescript
import { CreatePaymentMethodNetworkTokenRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentMethodNetworkTokenRequest = {
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  networkTokenCreate: {
    securityCode: "123",
    merchantInitiated: false,
    isSubsequentPayment: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `paymentMethodId`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | The ID of the payment method                                                   | ef9496d8-53a5-4aad-8ca2-00eb68334389                                           |
| `networkTokenCreate`                                                           | [components.NetworkTokenCreate](../../models/components/networktokencreate.md) | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |