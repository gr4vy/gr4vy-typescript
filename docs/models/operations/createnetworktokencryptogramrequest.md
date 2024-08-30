# CreateNetworkTokenCryptogramRequest

## Example Usage

```typescript
import { CreateNetworkTokenCryptogramRequest } from "@gr4vy/sdk/models/operations";

let value: CreateNetworkTokenCryptogramRequest = {
    paymentMethodId: "986e881e-ad4f-40e1-8125-63f94e29e973",
    networkTokenId: "e922a57a-15be-43e0-a080-7e2b6e3ab884",
    cryptogramCreate: {
        merchantInitiated: false,
    },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `paymentMethodId`                                                          | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `networkTokenId`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `cryptogramCreate`                                                         | [components.CryptogramCreate](../../models/components/cryptogramcreate.md) | :heavy_check_mark:                                                         | N/A                                                                        |