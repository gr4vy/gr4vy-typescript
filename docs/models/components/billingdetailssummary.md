# BillingDetailsSummary

Base model with JSON encoders.

## Example Usage

```typescript
import { BillingDetailsSummary } from "@gr4vy/sdk/models/components";

let value: BillingDetailsSummary = {
    phoneNumber: "+14155552671",
    address: {
        country: "DE",
        stateCode: "GB-LND",
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The first or given name for these buyer details.                                                   |                                                                                                    |
| `lastName`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The last or family name for these buyer details.                                                   |                                                                                                    |
| `emailAddress`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The email address for these buyer details.                                                         |                                                                                                    |
| `phoneNumber`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The phone number for these buyer details.                                                          | +14155552671                                                                                       |
| `address`                                                                                          | [components.BillingDetailsSummaryAddress](../../models/components/billingdetailssummaryaddress.md) | :heavy_minus_sign:                                                                                 | The address for these buyer details.                                                               |                                                                                                    |
| `taxId`                                                                                            | [components.BillingDetailsSummaryTaxId](../../models/components/billingdetailssummarytaxid.md)     | :heavy_minus_sign:                                                                                 | The tax ID for these buyer details.                                                                |                                                                                                    |
| `type`                                                                                             | [components.BillingDetailsSummaryType](../../models/components/billingdetailssummarytype.md)       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |