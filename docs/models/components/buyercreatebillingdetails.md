# BuyerCreateBillingDetails

The billing name, address, email, and other fields for this buyer

## Example Usage

```typescript
import { BuyerCreateBillingDetails } from "@gr4vy/sdk/models/components";

let value: BuyerCreateBillingDetails = {
    phoneNumber: "+14155552671",
    address: {
        country: "GB",
        stateCode: "US-CA",
    },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `firstName`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | The first or given name for these buyer details.                               |                                                                                |
| `lastName`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The last or family name for these buyer details.                               |                                                                                |
| `emailAddress`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | The email address for these buyer details.                                     |                                                                                |
| `phoneNumber`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | The phone number for these buyer details.                                      | +14155552671                                                                   |
| `address`                                                                      | [components.BuyerCreateAddress](../../models/components/buyercreateaddress.md) | :heavy_minus_sign:                                                             | The address for these buyer details.                                           |                                                                                |
| `taxId`                                                                        | [components.BuyerCreateTaxId](../../models/components/buyercreatetaxid.md)     | :heavy_minus_sign:                                                             | The tax ID for these buyer details.                                            |                                                                                |