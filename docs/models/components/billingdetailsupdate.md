# BillingDetailsUpdate

The billing details of the buyer.

## Example Usage

```typescript
import { BillingDetailsUpdate } from "@gr4vy/sdk/models/components";

let value: BillingDetailsUpdate = {
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
    taxId: {
        value: "12345678931",
        kind: "gb.vat",
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
| `address`                                                                                                                                         | [components.BuyerUpdateAddress](../../models/components/buyerupdateaddress.md)                                                                    | :heavy_minus_sign:                                                                                                                                | The billing address for the buyer.                                                                                                                |                                                                                                                                                   |
| `taxId`                                                                                                                                           | [components.BuyerUpdateTaxID](../../models/components/buyerupdatetaxid.md)                                                                        | :heavy_minus_sign:                                                                                                                                | The tax ID information associated with the billing details.                                                                                       |                                                                                                                                                   |