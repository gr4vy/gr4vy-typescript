# DeleteBuyerShippingDetailsRequest

## Example Usage

```typescript
import { DeleteBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: DeleteBuyerShippingDetailsRequest = {
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  shippingDetailsId: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
  xGr4vyMerchantAccountId: "default",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `buyerId`                                               | *string*                                                | :heavy_check_mark:                                      | The ID of the buyer to delete shipping details for.     | fe26475d-ec3e-4884-9553-f7356683f7f9                    |
| `shippingDetailsId`                                     | *string*                                                | :heavy_check_mark:                                      | The ID of the shipping details to delete.               | bf8c36ad-02d9-4904-b0f9-a230b149e341                    |
| `timeoutInSeconds`                                      | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `xGr4vyMerchantAccountId`                               | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. | default                                                 |