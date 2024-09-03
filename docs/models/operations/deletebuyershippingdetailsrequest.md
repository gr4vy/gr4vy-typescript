# DeleteBuyerShippingDetailsRequest

## Example Usage

```typescript
import { DeleteBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: DeleteBuyerShippingDetailsRequest = {
    buyerId: "711e5b7f-d2ed-4028-921c-ddc692601fb5",
    shippingDetailsId: "76b0d5f0-d30c-45fb-b258-7053202c73d5",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `buyerId`                                          | *string*                                           | :heavy_check_mark:                                 | The `id` of the buyer to list shipping details for |
| `shippingDetailsId`                                | *string*                                           | :heavy_check_mark:                                 | N/A                                                |