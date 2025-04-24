# UpdateBuyerShippingDetailsRequest

## Example Usage

```typescript
import { UpdateBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerShippingDetailsRequest = {
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  shippingDetailsId: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
  xGr4vyMerchantAccountId: "default",
  shippingDetailsUpdate: {
    firstName: "John",
    lastName: "Doe",
    emailAddress: "john@example.com",
    phoneNumber: "+1234567890",
    address: {
      city: "San Jose",
      country: "US",
      postalCode: "94560",
      state: "California",
      stateCode: "US-CA",
      houseNumberOrName: "10",
      line1: "Stafford Appartments",
      line2: "29th Street",
      organization: "Gr4vy",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `buyerId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the buyer to update shipping details for.                                  | fe26475d-ec3e-4884-9553-f7356683f7f9                                                 |
| `shippingDetailsId`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the shipping details to update.                                            | bf8c36ad-02d9-4904-b0f9-a230b149e341                                                 |
| `timeoutInSeconds`                                                                   | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `xGr4vyMerchantAccountId`                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | The ID of the merchant account to use for this request.                              | default                                                                              |
| `shippingDetailsUpdate`                                                              | [components.ShippingDetailsUpdate](../../models/components/shippingdetailsupdate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |