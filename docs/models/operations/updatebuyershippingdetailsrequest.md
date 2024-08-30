# UpdateBuyerShippingDetailsRequest

## Example Usage

```typescript
import { UpdateBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerShippingDetailsRequest = {
    buyerId: "13bb6f48-b656-4bcd-b35f-f2e4b27537a8",
    shippingDetailsId: "cd9e7319-c177-4d52-9f77-b114eeb52ff7",
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
| `buyerId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `shippingDetailsId`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `shippingDetailsUpdate`                                                              | [components.ShippingDetailsUpdate](../../models/components/shippingdetailsupdate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |