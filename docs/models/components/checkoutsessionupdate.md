# CheckoutSessionUpdate

Base model with JSON encoders.

## Example Usage

```typescript
import { CheckoutSessionUpdate } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionUpdate = {
    buyer: {
        billingDetails: {
            phoneNumber: "+14155552671",
            address: {
                country: "DE",
                stateCode: "GB-LND",
            },
        },
        shippingDetails: {
            phoneNumber: "+442071838750",
            address: {
                country: "GB",
                stateCode: "US-CA",
            },
        },
    },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `cartItems`                                                                                          | [components.CartItem](../../models/components/cartitem.md)[]                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | [components.CheckoutSessionUpdateMetadata](../../models/components/checkoutsessionupdatemetadata.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `buyer`                                                                                              | [components.GuestBuyer](../../models/components/guestbuyer.md)                                       | :heavy_minus_sign:                                                                                   | Request body for creating a new buyer                                                                |