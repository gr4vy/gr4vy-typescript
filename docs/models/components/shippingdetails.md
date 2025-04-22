# ShippingDetails

## Example Usage

```typescript
import { ShippingDetails } from "@gr4vy/sdk/models/components";

let value: ShippingDetails = {
  firstName: "John",
  lastName: "Doe",
  emailAddress: "john@example.com",
  phoneNumber: "+1234567890",
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
  id: "bf8c36ad-02d9-4904-b0f9-a230b149e341",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `firstName`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | The first name(s) or given name for the buyer.                                                  | John                                                                                            |
| `lastName`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | The last name, or family name, of the buyer.                                                    | Doe                                                                                             |
| `emailAddress`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | The email address for the buyer.                                                                | john@example.com                                                                                |
| `phoneNumber`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | The phone number for the buyer which should be formatted according to the E164 number standard. | +1234567890                                                                                     |
| `address`                                                                                       | [components.Address](../../models/components/address.md)                                        | :heavy_minus_sign:                                                                              | The billing address for the buyer.                                                              |                                                                                                 |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | The ID for the shipping details.                                                                | bf8c36ad-02d9-4904-b0f9-a230b149e341                                                            |
| `buyerId`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | The ID for the buyer.                                                                           | fe26475d-ec3e-4884-9553-f7356683f7f9                                                            |
| `type`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | Always `shipping-details`.                                                                      | shipping-details                                                                                |