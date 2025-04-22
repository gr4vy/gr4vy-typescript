# BuyerUpdate

Request body for updating an existing buyer

## Example Usage

```typescript
import { BuyerUpdate } from "@gr4vy/sdk/models/components";

let value: BuyerUpdate = {
  displayName: "John Doe",
  externalIdentifier: "buyer-12345",
  billingDetails: {
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
    taxId: {
      value: "12345678931",
      kind: "bo.ci",
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `displayName`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | The display name for the buyer.                                                  | John Doe                                                                         |
| `externalIdentifier`                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | The merchant identifier for this buyer.                                          | buyer-12345                                                                      |
| `accountNumber`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | The buyer account number                                                         |                                                                                  |
| `billingDetails`                                                                 | [components.BillingDetailsInput](../../models/components/billingdetailsinput.md) | :heavy_minus_sign:                                                               | The billing name, address, email, and other fields for this buyer.               |                                                                                  |