# BuyerCreateTaxId

The tax ID for these buyer details.

## Example Usage

```typescript
import { BuyerCreateTaxId } from "@gr4vy/sdk/models/components";

let value: BuyerCreateTaxId = {
    value: "<value>",
    kind: "ca.pst_bc",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `kind`                                                       | [components.TaxIdKind](../../models/components/taxidkind.md) | :heavy_check_mark:                                           | An enumeration.                                              |