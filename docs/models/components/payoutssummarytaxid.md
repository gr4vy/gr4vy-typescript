# PayoutsSummaryTaxId

The tax ID information associated with the billing details.

## Example Usage

```typescript
import { PayoutsSummaryTaxId } from "@gr4vy/sdk/models/components";

let value: PayoutsSummaryTaxId = {
  value: "12345678931",
  kind: "us.ein",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `value`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | The tax ID for the buyer.                                                                | 12345678931                                                                              |
| `kind`                                                                                   | [components.PayoutsSummaryTaxIdKind](../../models/components/payoutssummarytaxidkind.md) | :heavy_check_mark:                                                                       | The kind of tax ID                                                                       | us.ein                                                                                   |