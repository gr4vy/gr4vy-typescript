# ShippingDetails

Base model with JSON encoders.

## Example Usage

```typescript
import { ShippingDetails } from "@gr4vy/sdk/models/components";

let value: ShippingDetails = {
    phoneNumber: "+14155552671",
    address: {
        country: "US",
        stateCode: "US-CA",
    },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `firstName`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | The first or given name for the person.                                                |                                                                                        |
| `lastName`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | The last or family name for the person.                                                |                                                                                        |
| `emailAddress`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | The email address for the person.                                                      |                                                                                        |
| `phoneNumber`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | The phone number for the person.                                                       | +14155552671                                                                           |
| `address`                                                                              | [components.ShippingDetailsAddress](../../models/components/shippingdetailsaddress.md) | :heavy_minus_sign:                                                                     | The address for the person.                                                            |                                                                                        |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | The ID of the shipping details resource.                                               |                                                                                        |
| `buyerId`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | The ID of the buyer to which these shipping details belong.                            |                                                                                        |
| `type`                                                                                 | [components.ShippingDetailsType](../../models/components/shippingdetailstype.md)       | :heavy_minus_sign:                                                                     | Always `shipping-details`.                                                             |                                                                                        |