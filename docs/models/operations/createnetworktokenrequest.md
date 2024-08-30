# CreateNetworkTokenRequest

## Example Usage

```typescript
import { CreateNetworkTokenRequest } from "@gr4vy/sdk/models/operations";

let value: CreateNetworkTokenRequest = {
    paymentMethodId: "8a50ce18-7f86-4bc1-b3d6-89eee9526f8d",
    networkTokenCreate: {
        merchantInitiated: false,
        isSubsequentPayment: false,
    },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `paymentMethodId`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `networkTokenCreate`                                                           | [components.NetworkTokenCreate](../../models/components/networktokencreate.md) | :heavy_check_mark:                                                             | N/A                                                                            |