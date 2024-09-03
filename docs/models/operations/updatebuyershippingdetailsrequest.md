# UpdateBuyerShippingDetailsRequest

## Example Usage

```typescript
import { UpdateBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerShippingDetailsRequest = {
    buyerId: "8b711e5b-7fd2-4ed0-a892-1cddc692601f",
    shippingDetailsId: "b576b0d5-f0d3-40c5-bbb2-587053202c73",
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