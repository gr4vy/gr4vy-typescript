# Buyer

## Example Usage

```typescript
import { Buyer } from "@gr4vy/sdk/models/components";

let value: Buyer = {
    type: "buyer",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    billingDetails: {
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
    },
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    displayName: "John L.",
    externalIdentifier: "user-789123",
    merchantAccountId: "default",
    updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.BuyerType](../../models/components/buyertype.md)                                               | :heavy_minus_sign:                                                                                         | The type of this resource. Is always `buyer`.                                                              | buyer                                                                                                      |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The unique Gr4vy ID for this buyer.                                                                        | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                       |
| `billingDetails`                                                                                           | [components.BuyerBillingDetails](../../models/components/buyerbillingdetails.md)                           | :heavy_minus_sign:                                                                                         | The billing details associated with a buyer.                                                               |                                                                                                            |
| `createdAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | The date and time<br/>when this buyer was created in our system.                                           | 2013-07-16T19:23:00.000+00:00                                                                              |
| `displayName`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | A unique name for this buyer which is used in the Gr4vy admin panel to give a buyer a human readable name. | John L.                                                                                                    |
| `externalIdentifier`                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | An external identifier that can be used to match the buyer against your own records.                       | user-789123                                                                                                |
| `merchantAccountId`                                                                                        | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The unique ID for a merchant account.                                                                      | default                                                                                                    |
| `updatedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | The date and time<br/>when this buyer was last updated in our system.                                      | 2013-07-16T19:23:00.000+00:00                                                                              |