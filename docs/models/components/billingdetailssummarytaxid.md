# BillingDetailsSummaryTaxId

The tax ID for these buyer details.

## Example Usage

```typescript
import { BillingDetailsSummaryTaxId } from "@gr4vy/sdk/models/components";

let value: BillingDetailsSummaryTaxId = {
    value: "<value>",
    kind: "my.sst",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `kind`                                                       | [components.TaxIdKind](../../models/components/taxidkind.md) | :heavy_check_mark:                                           | An enumeration.                                              |