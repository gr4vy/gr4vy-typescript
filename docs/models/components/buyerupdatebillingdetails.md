# BuyerUpdateBillingDetails

The billing name, address, email, and other fields for this buyer.

## Example Usage

```typescript
import { BuyerUpdateBillingDetails } from "@gr4vy/sdk/models/components";

let value: BuyerUpdateBillingDetails = {
    phoneNumber: "+442071838750",
    address: {
        country: "DE",
        stateCode: "US-CA",
    },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `firstName`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | The first or given name for the person.                                        |                                                                                |
| `lastName`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The last or family name for the person.                                        |                                                                                |
| `emailAddress`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | The email address for the person.                                              |                                                                                |
| `phoneNumber`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | The phone number for the person.                                               | +14155552671                                                                   |
| `address`                                                                      | [components.BuyerUpdateAddress](../../models/components/buyerupdateaddress.md) | :heavy_minus_sign:                                                             | The address for the person.                                                    |                                                                                |
| `taxId`                                                                        | [components.BuyerUpdateTaxId](../../models/components/buyerupdatetaxid.md)     | :heavy_minus_sign:                                                             | The tax ID for these buyer details.                                            |                                                                                |