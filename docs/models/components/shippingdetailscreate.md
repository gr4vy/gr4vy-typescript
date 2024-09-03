# ShippingDetailsCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { ShippingDetailsCreate } from "@gr4vy/sdk/models/components";

let value: ShippingDetailsCreate = {
    phoneNumber: "+14155552671",
    address: {
        country: "GB",
        stateCode: "GB-LND",
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The first or given name for these buyer details.                                                   |                                                                                                    |
| `lastName`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The last or family name for these buyer details.                                                   |                                                                                                    |
| `emailAddress`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The email address for these buyer details.                                                         |                                                                                                    |
| `phoneNumber`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The phone number for these buyer details.                                                          | +14155552671                                                                                       |
| `address`                                                                                          | [components.ShippingDetailsCreateAddress](../../models/components/shippingdetailscreateaddress.md) | :heavy_minus_sign:                                                                                 | The address for these buyer details.                                                               |                                                                                                    |