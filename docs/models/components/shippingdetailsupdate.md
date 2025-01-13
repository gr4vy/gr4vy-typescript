# ShippingDetailsUpdate

Base model with JSON encoders.

## Example Usage

```typescript
import { ShippingDetailsUpdate } from "@gr4vy/sdk/models/components";

let value: ShippingDetailsUpdate = {
  firstName: "John",
  lastName: "Doe",
  emailAddress: "john@example.com",
  phoneNumber: "+442071838750",
  address: {
    city: "San Jose",
    country: "US",
    postalCode: "94560",
    state: "California",
    stateCode: "US-CA",
    houseNumberOrName: "10",
    line1: "Stafford Appartments",
    line2: "29th Street",
    organization: "Gr4vy",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The first name(s) or given name for the buyer.                                                     | John                                                                                               |
| `lastName`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The last name, or family name, of the buyer.                                                       | Doe                                                                                                |
| `emailAddress`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The email address for the buyer.                                                                   | john@example.com                                                                                   |
| `phoneNumber`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The phone number for the buyer which should be formatted according to the E164 number standard.    | +14155552671                                                                                       |
| `address`                                                                                          | [components.ShippingDetailsUpdateAddress](../../models/components/shippingdetailsupdateaddress.md) | :heavy_minus_sign:                                                                                 | The billing address for the buyer.                                                                 |                                                                                                    |