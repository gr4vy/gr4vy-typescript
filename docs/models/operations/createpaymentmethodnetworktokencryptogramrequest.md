# CreatePaymentMethodNetworkTokenCryptogramRequest

## Example Usage

```typescript
import { CreatePaymentMethodNetworkTokenCryptogramRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentMethodNetworkTokenCryptogramRequest = {
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  networkTokenId: "f8dd5cfc-7834-4847-95dc-f75a360e2298",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `paymentMethodId`                                                          | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the payment method                                               | ef9496d8-53a5-4aad-8ca2-00eb68334389                                       |
| `networkTokenId`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the network token                                                | f8dd5cfc-7834-4847-95dc-f75a360e2298                                       |
| `merchantAccountId`                                                        | *string*                                                                   | :heavy_minus_sign:                                                         | The ID of the merchant account to use for this request.                    |                                                                            |
| `cryptogramCreate`                                                         | [components.CryptogramCreate](../../models/components/cryptogramcreate.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |