# ShippingDetailsUpdate

Base model with JSON encoders.

## Example Usage

```typescript
import { ShippingDetailsUpdate } from "@gr4vy/sdk/models/components";

let value: ShippingDetailsUpdate = {
    phoneNumber: "+442071838750",
    address: {
        country: "US",
        stateCode: "US-CA",
    },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `firstName`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `lastName`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `emailAddress`                                           | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `phoneNumber`                                            | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | +14155552671                                             |
| `address`                                                | [components.Address](../../models/components/address.md) | :heavy_minus_sign:                                       | Base model with JSON encoders.                           |                                                          |