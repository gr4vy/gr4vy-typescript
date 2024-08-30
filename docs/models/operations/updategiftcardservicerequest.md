# UpdateGiftCardServiceRequest

## Example Usage

```typescript
import { UpdateGiftCardServiceRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateGiftCardServiceRequest = {
    giftCardServiceId: "541b126f-44c5-4c5e-a06b-d0e0d54c7d3f",
    giftCardServiceUpdateRequest: {
        displayName: "Qwikcilver UK",
        fields: [
            {
                key: "private_key",
                value: "pk_26PHem9AhJZvU623DfE1x4sd",
            },
        ],
        active: true,
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `giftCardServiceId`                                                                                | *string*                                                                                           | :heavy_check_mark:                                                                                 | The unique ID of the gift card service.                                                            | 541b126f-44c5-4c5e-a06b-d0e0d54c7d3f                                                               |
| `giftCardServiceUpdateRequest`                                                                     | [components.GiftCardServiceUpdateRequest](../../models/components/giftcardserviceupdaterequest.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |