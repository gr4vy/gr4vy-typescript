# BuyerRequestTaxID

The tax ID information associated with the billing details.

## Example Usage

```typescript
import { BuyerRequestTaxID } from "@gr4vy/sdk/models/components";

let value: BuyerRequestTaxID = {
    value: "12345678931",
    kind: "gb.vat",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `value`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | The tax ID for the buyer.                                                  | 12345678931                                                                |
| `kind`                                                                     | [components.BuyerRequestKind](../../models/components/buyerrequestkind.md) | :heavy_check_mark:                                                         | The kind of tax ID.                                                        | gb.vat                                                                     |