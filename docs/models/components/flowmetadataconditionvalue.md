# FlowMetadataConditionValue

The metadata to compare the transaction to.

## Example Usage

```typescript
import { FlowMetadataConditionValue } from "@gr4vy/sdk/models/components";

let value: FlowMetadataConditionValue = {
    key: "product",
    value: "phone",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `key`                                            | *string*                                         | :heavy_minus_sign:                               | Key to metadata value to compare transaction to. | product                                          |
| `value`                                          | *components.FlowMetadataConditionValueValue*     | :heavy_minus_sign:                               | N/A                                              |                                                  |