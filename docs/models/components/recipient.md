# Recipient

Recipient of an account funding transaction

## Example Usage

```typescript
import { Recipient } from "@gr4vy/sdk/models/components";
import { RFCDate } from "@gr4vy/sdk/types";

let value: Recipient = {
  firstName: "",
  lastName: "",
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
  accountNumber: "act12345",
  dateOfBirth: new RFCDate("1995-12-23"),
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     | Example                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                                                                     | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The first name of the recipient.                                                                                                                |                                                                                                                                                 |
| `lastName`                                                                                                                                      | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The last name of the recipient.                                                                                                                 |                                                                                                                                                 |
| `address`                                                                                                                                       | [components.Address](../../models/components/address.md)                                                                                        | :heavy_minus_sign:                                                                                                                              | The recipient of the fund's address.                                                                                                            |                                                                                                                                                 |
| `accountNumber`                                                                                                                                 | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | The account number of the recipient. Depending on the type of funds transfer, this could be a wallet ID, bank accoutn number, or email address. | act12345                                                                                                                                        |
| `dateOfBirth`                                                                                                                                   | [RFCDate](../../types/rfcdate.md)                                                                                                               | :heavy_minus_sign:                                                                                                                              | The date of birth of the recipient.                                                                                                             | 1995-12-23                                                                                                                                      |