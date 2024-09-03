# UpdateBuyerRequest

## Example Usage

```typescript
import { UpdateBuyerRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerRequest = {
    buyerId: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    buyerUpdate: {
        billingDetails: {
            phoneNumber: "+442071838750",
            address: {
                country: "US",
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