# BillingDetails

Base model with JSON encoders.

## Example Usage

```typescript
import { BillingDetails } from "@gr4vy/sdk/models/components";

let value: BillingDetails = {
    phoneNumber: "+14155552671",
    address: {
        country: "GB",
        stateCode: "GB-LND",
    },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `firstName`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `lastName`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `emailAddress`                                           | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `phoneNumber`                                            | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | +14155552671                                             |
| `address`                                                | [components.Address](../../models/components/address.md) | :heavy_minus_sign:                                       | Base model with JSON encoders.                           |                                                          |
| `taxId`                                                  | [components.TaxId](../../models/components/taxid.md)     | :heavy_minus_sign:                                       | Base model with JSON encoders.                           |                                                          |