# ShippingDetailsUpdate

Base model with JSON encoders.

## Example Usage

```typescript
import { ShippingDetailsUpdate } from "@gr4vy/sdk/models/components";

let value: ShippingDetailsUpdate = {
    phoneNumber: "+442071838750",
    address: {
        country: "US",
        stateCode: "GB-LND",
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The first or given name for the person.                                                            |                                                                                                    |
| `lastName`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The last or family name for the person.                                                            |                                                                                                    |
| `emailAddress`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The email address for the person.                                                                  |                                                                                                    |
| `phoneNumber`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The phone number for the person.                                                                   | +14155552671                                                                                       |
| `address`                                                                                          | [components.ShippingDetailsUpdateAddress](../../models/components/shippingdetailsupdateaddress.md) | :heavy_minus_sign:                                                                                 | The address for the person.                                                                        |                                                                                                    |