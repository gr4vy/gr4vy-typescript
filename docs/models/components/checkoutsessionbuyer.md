# CheckoutSessionBuyer

Provide buyer details for the transaction. No buyer resource will be created on Gr4vy when used.

## Example Usage

```typescript
import { CheckoutSessionBuyer } from "@gr4vy/sdk/models/components";

let value: CheckoutSessionBuyer = {
  displayName: "John Doe",
  externalIdentifier: "buyer-12345",
  billingDetails: {
    firstName: "John",
    lastName: "Doe",
    emailAddress: "john@example.com",
    phoneNumber: "+442071838750",
    address: {
      city: "San Jose",
      country: "DE",
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
      kind: "us.ein",
    },
  },
  shippingDetails: {
    firstName: "John",
    lastName: "Doe",
    emailAddress: "john@example.com",
    phoneNumber: "+14155552671",
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
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `displayName`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The display name for the buyer.                                                                        | John Doe                                                                                               |
| `externalIdentifier`                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The merchant identifier for this buyer.                                                                | buyer-12345                                                                                            |
| `billingDetails`                                                                                       | [components.BillingDetails](../../models/components/billingdetails.md)                                 | :heavy_minus_sign:                                                                                     | Base model with JSON encoders.                                                                         |                                                                                                        |
| `shippingDetails`                                                                                      | [components.CheckoutSessionShippingDetails](../../models/components/checkoutsessionshippingdetails.md) | :heavy_minus_sign:                                                                                     | The optional shipping details for this buyer.                                                          |                                                                                                        |