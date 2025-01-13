# Buyer

Base model with JSON encoders.

## Example Usage

```typescript
import { Buyer } from "@gr4vy/sdk/models/components";

let value: Buyer = {
  type: "buyer",
  id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  merchantAccountId: "default",
  displayName: "John Doe",
  externalIdentifier: "buyer-12345",
  billingDetails: {
    firstName: "John",
    lastName: "Doe",
    emailAddress: "john@example.com",
    phoneNumber: "+14155552671",
    address: {
      city: "San Jose",
      country: "DE",
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
  },
  createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
  updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.BuyerType](../../models/components/buyertype.md)                                  | :heavy_minus_sign:                                                                            | Always `buyer`.                                                                               | buyer                                                                                         |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID for the buyer.                                                                         | fe26475d-ec3e-4884-9553-f7356683f7f9                                                          |
| `merchantAccountId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the merchant account this buyer belongs to.                                         | default                                                                                       |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name for the buyer.                                                               | John Doe                                                                                      |
| `externalIdentifier`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The merchant identifier for this buyer.                                                       | buyer-12345                                                                                   |
| `billingDetails`                                                                              | [components.BillingDetails](../../models/components/billingdetails.md)                        | :heavy_minus_sign:                                                                            | Base model with JSON encoders.                                                                |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this buyer was created at.                                                           | 2013-07-16T19:23:00.000+00:00                                                                 |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this buyer was last updated at.                                                      | 2013-07-16T19:23:00.000+00:00                                                                 |