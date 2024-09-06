# ShippingDetails

Base model with JSON encoders.

## Example Usage

```typescript
import { ShippingDetails } from "@gr4vy/sdk/models/components";

let value: ShippingDetails = {
    phoneNumber: "+442071838750",
    address: {
        country: "US",
        stateCode: "GB-LND",
    },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `firstName`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | The first or given name for these buyer details.                                       |                                                                                        |
| `lastName`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | The last or family name for these buyer details.                                       |                                                                                        |
| `emailAddress`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | The email address for these buyer details.                                             |                                                                                        |
| `phoneNumber`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | The phone number for these buyer details.                                              | +14155552671                                                                           |
| `address`                                                                              | [components.ShippingDetailsAddress](../../models/components/shippingdetailsaddress.md) | :heavy_minus_sign:                                                                     | The address for these buyer details.                                                   |                                                                                        |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `buyerId`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `type`                                                                                 | [components.ShippingDetailsType](../../models/components/shippingdetailstype.md)       | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |