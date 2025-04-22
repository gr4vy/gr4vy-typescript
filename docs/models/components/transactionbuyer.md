# TransactionBuyer

## Example Usage

```typescript
import { TransactionBuyer } from "@gr4vy/sdk/models/components";

let value: TransactionBuyer = {
  id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
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
      kind: "cl.tin",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | Always `buyer`.                                                                    | buyer                                                                              |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID for the buyer.                                                              | fe26475d-ec3e-4884-9553-f7356683f7f9                                               |
| `displayName`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | The display name for the buyer.                                                    | John Doe                                                                           |
| `externalIdentifier`                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | The merchant identifier for this buyer.                                            | buyer-12345                                                                        |
| `billingDetails`                                                                   | [components.BillingDetailsOutput](../../models/components/billingdetailsoutput.md) | :heavy_minus_sign:                                                                 | The billing name, address, email, and other fields for this buyer.                 |                                                                                    |
| `accountNumber`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | The buyer account number.                                                          |                                                                                    |