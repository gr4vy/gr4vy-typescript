# BillingDetailsSummary

Base model with JSON encoders.

## Example Usage

```typescript
import { BillingDetailsSummary } from "@gr4vy/sdk/models/components";

let value: BillingDetailsSummary = {
    phoneNumber: "+14155552671",
    address: {
        country: "US",
        stateCode: "US-CA",
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `firstName`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | The first or given name for the person.                                                      |                                                                                              |
| `lastName`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | The last or family name for the person.                                                      |                                                                                              |
| `emailAddress`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | The email address for the person.                                                            |                                                                                              |
| `phoneNumber`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The phone number for the person.                                                             | +14155552671                                                                                 |
| `address`                                                                                    | [components.Address](../../models/components/address.md)                                     | :heavy_minus_sign:                                                                           | The address for the person.                                                                  |                                                                                              |
| `taxId`                                                                                      | [components.TaxId](../../models/components/taxid.md)                                         | :heavy_minus_sign:                                                                           | The tax ID for these buyer details.                                                          |                                                                                              |
| `type`                                                                                       | [components.BillingDetailsSummaryType](../../models/components/billingdetailssummarytype.md) | :heavy_minus_sign:                                                                           | Always `billing-details`.                                                                    |                                                                                              |