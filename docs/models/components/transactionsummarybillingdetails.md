# TransactionSummaryBillingDetails

The billing name, address, email, and other fields for this buyer.

## Example Usage

```typescript
import { TransactionSummaryBillingDetails } from "@gr4vy/sdk/models/components";

let value: TransactionSummaryBillingDetails = {
  firstName: "John",
  lastName: "Doe",
  emailAddress: "john@example.com",
  phoneNumber: "+14155552671",
  address: {
    city: "San Jose",
    country: "US",
    postalCode: "94560",
    state: "California",
    stateCode: "GB-LND",
    houseNumberOrName: "10",
    line1: "Stafford Appartments",
    line2: "29th Street",
    organization: "Gr4vy",
  },
  taxId: {
    value: "12345678931",
    kind: "us.ein",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `firstName`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The first name(s) or given name for the buyer.                                                         | John                                                                                                   |
| `lastName`                                                                                             | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The last name, or family name, of the buyer.                                                           | Doe                                                                                                    |
| `emailAddress`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The email address for the buyer.                                                                       | john@example.com                                                                                       |
| `phoneNumber`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The phone number for the buyer which should be formatted according to the E164 number standard.        | +14155552671                                                                                           |
| `address`                                                                                              | [components.TransactionSummaryBuyerAddress](../../models/components/transactionsummarybuyeraddress.md) | :heavy_minus_sign:                                                                                     | The billing address for the buyer.                                                                     |                                                                                                        |
| `taxId`                                                                                                | [components.TransactionSummaryTaxId](../../models/components/transactionsummarytaxid.md)               | :heavy_minus_sign:                                                                                     | The tax ID information associated with the billing details.                                            |                                                                                                        |