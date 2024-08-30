# DeleteBuyerShippingDetailsRequest

## Example Usage

```typescript
import { DeleteBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: DeleteBuyerShippingDetailsRequest = {
    buyerId: "5e320a31-9f4b-4adf-947c-9a867bc42426",
    shippingDetailsId: "665816dd-ca8e-4f51-bcb4-c593ec12cdaa",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `buyerId`                                          | *string*                                           | :heavy_check_mark:                                 | The `id` of the buyer to list shipping details for |
| `shippingDetailsId`                                | *string*                                           | :heavy_check_mark:                                 | N/A                                                |