# AddBuyerShippingDetailsRequest

## Example Usage

```typescript
import { AddBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: AddBuyerShippingDetailsRequest = {
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  shippingDetailsCreate: {
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
| `buyerId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the buyer to add shipping details to.                                      | fe26475d-ec3e-4884-9553-f7356683f7f9                                                 |
| `timeoutInSeconds`                                                                   | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `shippingDetailsCreate`                                                              | [components.ShippingDetailsCreate](../../models/components/shippingdetailscreate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |