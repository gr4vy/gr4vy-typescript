# DeleteBuyerShippingDetailsRequest

## Example Usage

```typescript
import { DeleteBuyerShippingDetailsRequest } from "@gr4vy/sdk/models/operations";

let value: DeleteBuyerShippingDetailsRequest = {
    buyerId: "b7fd2ed0-2892-41cd-9c69-2601fb576b0d",
    shippingDetailsId: "5f0d30c5-fbb2-4587-8532-02c73d5fe9b9",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `buyerId`                                          | *string*                                           | :heavy_check_mark:                                 | The `id` of the buyer to list shipping details for |
| `shippingDetailsId`                                | *string*                                           | :heavy_check_mark:                                 | N/A                                                |