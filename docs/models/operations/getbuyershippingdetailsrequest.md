# GetBuyerShippingDetailsRequest

## Example Usage

```typescript
import { GetBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: GetBuyerShippingDetailsRequest = {
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  shippingDetailsId: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `buyerId`                                               | *string*                                                | :heavy_check_mark:                                      | The ID of the buyer to retrieve shipping details for.   | fe26475d-ec3e-4884-9553-f7356683f7f9                    |
| `shippingDetailsId`                                     | *string*                                                | :heavy_check_mark:                                      | The ID of the shipping details to retrieve.             | bf8c36ad-02d9-4904-b0f9-a230b149e341                    |
| `applicationName`                                       | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |