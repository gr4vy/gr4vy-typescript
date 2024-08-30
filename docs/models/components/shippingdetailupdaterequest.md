# ShippingDetailUpdateRequest

## Example Usage

```typescript
import { ShippingDetailUpdateRequest } from "@gr4vy/sdk/models/components";

let value: ShippingDetailUpdateRequest = {
    firstName: "John",
    lastName: "Lunn",
    emailAddress: "john@example.com",
    phoneNumber: "+1234567890",
    address: {
        city: "London",
        country: "GB",
        postalCode: "789123",
        state: "Greater London",
        stateCode: "GB-LND",
        houseNumberOrName: "10",
        line1: "10 Oxford Street",
        line2: "New Oxford Court",
        organization: "Gr4vy",
    },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                                                                       | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The first name(s) or given name for the buyer.                                                                                                    | John                                                                                                                                              |
| `lastName`                                                                                                                                        | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The last name, or family name, of the buyer.                                                                                                      | Lunn                                                                                                                                              |
| `emailAddress`                                                                                                                                    | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The email address for the buyer.                                                                                                                  | john@example.com                                                                                                                                  |
| `phoneNumber`                                                                                                                                     | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The phone number for the buyer which should be formatted according to the<br/>[E164 number standard](https://www.twilio.com/docs/glossary/what-e164). | +1234567890                                                                                                                                       |
| `address`                                                                                                                                         | [components.ShippingDetailUpdateRequestAddress](../../models/components/shippingdetailupdaterequestaddress.md)                                    | :heavy_minus_sign:                                                                                                                                | The physical shipping address associated to this buyer.                                                                                           |                                                                                                                                                   |