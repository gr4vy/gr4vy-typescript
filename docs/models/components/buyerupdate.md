# BuyerUpdate

A request to update a buyer.

## Example Usage

```typescript
import { BuyerUpdate } from "@gr4vy/sdk/models/components";

let value: BuyerUpdate = {
    externalIdentifier: "user-789123",
    displayName: "John L.",
    billingDetails: {
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
    },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `externalIdentifier`                                                                                                               | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | An external identifier that can be used to match the buyer against your own records. This value needs to be unique for all buyers. | user-789123                                                                                                                        |
| `displayName`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A unique name for this buyer which is used in the Gr4vy admin panel to give a buyer a human readable name.                         | John L.                                                                                                                            |
| `billingDetails`                                                                                                                   | [components.BillingDetailsUpdate](../../models/components/billingdetailsupdate.md)                                                 | :heavy_minus_sign:                                                                                                                 | The billing details of the buyer.                                                                                                  |                                                                                                                                    |