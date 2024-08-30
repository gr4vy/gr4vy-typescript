# TransactionBillingDetails

The billing details associated with the buyer, which include the
address and tax ID.

## Example Usage

```typescript
import { TransactionBillingDetails } from "@gr4vy/sdk/models/components";

let value: TransactionBillingDetails = {
    type: "billing-details",
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

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | [components.TransactionBuyerBillingDetailsType](../../models/components/transactionbuyerbillingdetailstype.md)                                   | :heavy_minus_sign:                                                                                                                               | The type of this resource. Is always `billing-details`.                                                                                          | billing-details                                                                                                                                  |
| `firstName`                                                                                                                                      | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The first name(s) or given name of the buyer.                                                                                                    | John                                                                                                                                             |
| `lastName`                                                                                                                                       | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The last name, or family name, of the buyer.                                                                                                     | Lunn                                                                                                                                             |
| `emailAddress`                                                                                                                                   | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The email address of the buyer.                                                                                                                  | john@example.com                                                                                                                                 |
| `phoneNumber`                                                                                                                                    | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The phone number of the buyer. This number is formatted according to the<br/>[E164 number standard](https://www.twilio.com/docs/glossary/what-e164). | +1234567890                                                                                                                                      |
| `address`                                                                                                                                        | [components.TransactionBuyerAddress](../../models/components/transactionbuyeraddress.md)                                                         | :heavy_minus_sign:                                                                                                                               | The billing address of the buyer.                                                                                                                |                                                                                                                                                  |
| `taxId`                                                                                                                                          | [components.TransactionTaxID](../../models/components/transactiontaxid.md)                                                                       | :heavy_minus_sign:                                                                                                                               | The tax information associated with the billing details.                                                                                         |                                                                                                                                                  |