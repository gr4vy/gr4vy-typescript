# BuyerTaxId

The tax ID for these buyer details.

## Example Usage

```typescript
import { BuyerTaxId } from "@gr4vy/sdk/models/components";

let value: BuyerTaxId = {
    value: "<value>",
    kind: "no.vat",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `value`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | The regional tax identifier                                                    |
| `kind`                                                                         | [components.TaxIdKind](../../models/components/taxidkind.md)                   | :heavy_check_mark:                                                             | The kind of tax identifier in a format matching `country.name`, e.g. `gb.vat`. |