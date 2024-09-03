# UpdateBuyerRequest

## Example Usage

```typescript
import { UpdateBuyerRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerRequest = {
    buyerId: "52c3f5ad-019d-4a1f-be78-f097b0074f15",
    buyerUpdate: {
        billingDetails: {
            phoneNumber: "+14155552671",
            address: {
                country: "GB",
                stateCode: "GB-LND",
            },
        },
    },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `buyerId`                                                        | *string*                                                         | :heavy_check_mark:                                               | The `id` of the buyer to update                                  |
| `buyerUpdate`                                                    | [components.BuyerUpdate](../../models/components/buyerupdate.md) | :heavy_check_mark:                                               | N/A                                                              |