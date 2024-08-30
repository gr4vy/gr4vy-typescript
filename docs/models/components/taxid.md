# TaxID

The tax information associated with the billing details.

## Example Usage

```typescript
import { TaxID } from "@gr4vy/sdk/models/components";

let value: TaxID = {
    value: "12345678931",
    kind: "gb.vat",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `value`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | The tax ID for the buyer.                                                      | 12345678931                                                                    |
| `kind`                                                                         | [components.BillingDetailsKind](../../models/components/billingdetailskind.md) | :heavy_check_mark:                                                             | The kind of tax ID.                                                            | gb.vat                                                                         |