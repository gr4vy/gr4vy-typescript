# CreateNetworkTokenCryptogramRequest

## Example Usage

```typescript
import { CreateNetworkTokenCryptogramRequest } from "@gr4vy/sdk/models/operations";

let value: CreateNetworkTokenCryptogramRequest = {
    paymentMethodId: "a57a15be-3e06-4080-be2b-6e3ab8845f05",
    networkTokenId: "97a60ff2-a54a-431e-9476-4a3e865e7956",
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