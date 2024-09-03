# TaxId

The tax ID for these buyer details.

## Example Usage

```typescript
import { TaxId } from "@gr4vy/sdk/models/components";

let value: TaxId = {
    value: "<value>",
    kind: "kr.brn",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `kind`                                                       | [components.TaxIdKind](../../models/components/taxidkind.md) | :heavy_check_mark:                                           | An enumeration.                                              |