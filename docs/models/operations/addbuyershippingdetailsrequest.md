# AddBuyerShippingDetailsRequest

## Example Usage

```typescript
import { AddBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: AddBuyerShippingDetailsRequest = {
    buyerId: "9177deac-646e-4cb5-b340-9e3eb1e5a2b1",
    shippingDetailsCreate: {
        phoneNumber: "+14155552671",
        address: {
            country: "US",
            stateCode: "US-CA",
        },
    },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `buyerId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `shippingDetailsCreate`                                                              | [components.ShippingDetailsCreate](../../models/components/shippingdetailscreate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |