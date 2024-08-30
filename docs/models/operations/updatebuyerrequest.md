# UpdateBuyerRequest

## Example Usage

```typescript
import { UpdateBuyerRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateBuyerRequest = {
    buyerId: "b9665b85-efbd-402b-ae0b-e2d782259e3e",
    buyerUpdate: {
        billingDetails: {
            phoneNumber: "+442071838750",
            address: {
                country: "DE",
                stateCode: "US-CA",
            },
        },
    },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `buyerId`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `buyerUpdate`                                                    | [components.BuyerUpdate](../../models/components/buyerupdate.md) | :heavy_check_mark:                                               | N/A                                                              |