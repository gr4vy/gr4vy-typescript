# ListPaymentMethodNetworkTokensRequest

## Example Usage

```typescript
import { ListPaymentMethodNetworkTokensRequest } from "@gr4vy/sdk/models/operations";

let value: ListPaymentMethodNetworkTokensRequest = {
  paymentMethodId: "ef9496d8-53a5-4aad-8ca2-00eb68334389",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `paymentMethodId`                                       | *string*                                                | :heavy_check_mark:                                      | The ID of the payment method                            | ef9496d8-53a5-4aad-8ca2-00eb68334389                    |
| `applicationName`                                       | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |