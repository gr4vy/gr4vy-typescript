# TaxId

## Example Usage

```typescript
import { TaxId } from "@gr4vy/sdk/models/components";

let value: TaxId = {
  value: "12345678931",
  kind: "ae.trn",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | The tax ID for the buyer.                                    | 12345678931                                                  |
| `kind`                                                       | [components.TaxIdKind](../../models/components/taxidkind.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |