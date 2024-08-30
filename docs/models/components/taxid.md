# TaxId

Base model with JSON encoders.

## Example Usage

```typescript
import { TaxId } from "@gr4vy/sdk/models/components";

let value: TaxId = {
    value: "<value>",
    kind: "ca.gst_hst",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `kind`                                                       | [components.TaxIdKind](../../models/components/taxidkind.md) | :heavy_check_mark:                                           | An enumeration.                                              |