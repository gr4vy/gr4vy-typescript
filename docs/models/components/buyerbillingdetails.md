# BuyerBillingDetails

The billing name, address, email, and other fields for this buyer.

## Example Usage

```typescript
import { BuyerBillingDetails } from "@gr4vy/sdk/models/components";

let value: BuyerBillingDetails = {
    phoneNumber: "+14155552671",
    address: {
        country: "US",
        stateCode: "US-CA",
    },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `firstName`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | The first or given name for the person.                            |                                                                    |
| `lastName`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | The last or family name for the person.                            |                                                                    |
| `emailAddress`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | The email address for the person.                                  |                                                                    |
| `phoneNumber`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | The phone number for the person.                                   | +14155552671                                                       |
| `address`                                                          | [components.BuyerAddress](../../models/components/buyeraddress.md) | :heavy_minus_sign:                                                 | The address for the person.                                        |                                                                    |
| `taxId`                                                            | [components.BuyerTaxId](../../models/components/buyertaxid.md)     | :heavy_minus_sign:                                                 | The tax ID for these buyer details.                                |                                                                    |