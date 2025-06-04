# UpdateBuyerShippingDetailsRequest

## Example Usage

```typescript
import { UpdateBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerShippingDetailsRequest = {
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  shippingDetailsId: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `buyerId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the buyer to update shipping details for.                                  | fe26475d-ec3e-4884-9553-f7356683f7f9                                                 |
| `shippingDetailsId`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the shipping details to update.                                            | bf8c36ad-02d9-4904-b0f9-a230b149e341                                                 |
| `merchantAccountId`                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | The ID of the merchant account to use for this request.                              |                                                                                      |
| `shippingDetailsUpdate`                                                              | [components.ShippingDetailsUpdate](../../models/components/shippingdetailsupdate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |