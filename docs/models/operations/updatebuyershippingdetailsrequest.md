# UpdateBuyerShippingDetailsRequest

## Example Usage

```typescript
import { UpdateBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerShippingDetailsRequest = {
    buyerId: "ae395efb-9ba8-48f3-a669-97074ba4469b",
    shippingDetailsId: "6e214195-9890-4afa-963e-2516fe4c8b71",
    shippingDetailsUpdate: {
        phoneNumber: "+14155552671",
        address: {
            country: "US",
            stateCode: "GB-LND",
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