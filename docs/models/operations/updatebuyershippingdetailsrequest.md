# UpdateBuyerShippingDetailsRequest

## Example Usage

```typescript
import { UpdateBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerShippingDetailsRequest = {
    buyerId: "4cd66ae3-95ef-4b9b-a88f-3a66997074ba",
    shippingDetailsId: "4469b6e2-1419-4598-90af-a563e2516fe4",
    shippingDetailsUpdate: {
        phoneNumber: "+442071838750",
        address: {
            country: "GB",
            stateCode: "US-CA",
        },
    },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `buyerId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The `id` of the buyer to list shipping details for                                   |
| `shippingDetailsId`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `shippingDetailsUpdate`                                                              | [components.ShippingDetailsUpdate](../../models/components/shippingdetailsupdate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |