# DeletePaymentMethodPaymentServiceTokenRequest

## Example Usage

```typescript
import { DeletePaymentMethodPaymentServiceTokenRequest } from "@gr4vy/sdk/models/operations";

let value: DeletePaymentMethodPaymentServiceTokenRequest = {
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
  paymentServiceTokenId: "703f2d99-3fd1-44bc-9cbd-a25a2d597886",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `paymentMethodId`                                       | *string*                                                | :heavy_check_mark:                                      | The ID of the payment method                            | ef9496d8-53a5-4aad-8ca2-00eb68334389                    |
| `paymentServiceTokenId`                                 | *string*                                                | :heavy_check_mark:                                      | The ID of the payment service token                     | 703f2d99-3fd1-44bc-9cbd-a25a2d597886                    |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |