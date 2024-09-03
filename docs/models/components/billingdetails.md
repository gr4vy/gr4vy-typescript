# BillingDetails

Base model with JSON encoders.

## Example Usage

```typescript
import { BillingDetails } from "@gr4vy/sdk/models/components";

let value: BillingDetails = {
    phoneNumber: "+442071838750",
    address: {
        country: "GB",
        stateCode: "GB-LND",
    },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `firstName`                                              | *string*                                                 | :heavy_minus_sign:                                       | The first or given name for these buyer details.         |                                                          |
| `lastName`                                               | *string*                                                 | :heavy_minus_sign:                                       | The last or family name for these buyer details.         |                                                          |
| `emailAddress`                                           | *string*                                                 | :heavy_minus_sign:                                       | The email address for these buyer details.               |                                                          |
| `phoneNumber`                                            | *string*                                                 | :heavy_minus_sign:                                       | The phone number for these buyer details.                | +14155552671                                             |
| `address`                                                | [components.Address](../../models/components/address.md) | :heavy_minus_sign:                                       | The address for these buyer details.                     |                                                          |
| `taxId`                                                  | [components.TaxId](../../models/components/taxid.md)     | :heavy_minus_sign:                                       | The tax ID for these buyer details.                      |                                                          |