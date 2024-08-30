# UpdateCheckoutSessionRequest

## Example Usage

```typescript
import { UpdateCheckoutSessionRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateCheckoutSessionRequest = {
    checkoutSessionId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    checkoutSessionUpdateRequest: {
        cartItems: [
            {
                name: "GoPro HERO9 Camcorder",
                quantity: 1,
                unitAmount: 37999,
                discountAmount: 0,
                taxAmount: 0,
                externalIdentifier: "item-789123",
                sku: "sku-789123",
                productUrl: "https://example.com/items/gopro",
                imageUrl: "https://example.com/images/items/gopro.png",
                productType: "physical",
            },
        ],
        metadata: {
            key: "value",
        },
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `checkoutSessionId`                                                                                | *string*                                                                                           | :heavy_check_mark:                                                                                 | The unique ID for a Checkout Session.                                                              | 8724fd24-5489-4a5d-90fd-0604df7d3b83                                                               |
| `checkoutSessionUpdateRequest`                                                                     | [components.CheckoutSessionUpdateRequest](../../models/components/checkoutsessionupdaterequest.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |