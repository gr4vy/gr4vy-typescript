# CreateNetworkTokenRequest

## Example Usage

```typescript
import { CreateNetworkTokenRequest } from "@gr4vy/sdk/models/operations";

let value: CreateNetworkTokenRequest = {
    paymentMethodId: "881ead4f-0e10-4125-a3f9-4e29e973e922",
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