# AddBuyerShippingDetailsRequest

## Example Usage

```typescript
import { AddBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: AddBuyerShippingDetailsRequest = {
    buyerId: "9da1ffe7-8f09-47b0-874f-15471b5e6e13",
    shippingDetailsCreate: {
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
| `buyerId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The `id` of the buyer to add shipping details to                                     |
| `shippingDetailsCreate`                                                              | [components.ShippingDetailsCreate](../../models/components/shippingdetailscreate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |