# FlowMetadataCondition

Metadata conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowMetadataCondition } from "@gr4vy/sdk/models/components";

let value: FlowMetadataCondition = {
    name: "metadata",
    operator: "includes",
    value: {
        key: "product",
        value: ["value1", "value2"],
    },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | [components.FlowMetadataConditionName](../../models/components/flowmetadataconditionname.md)         | :heavy_check_mark:                                                                                   | The type of match made for this rule.                                                                | metadata                                                                                             |
| `operator`                                                                                           | [components.FlowMetadataConditionOperator](../../models/components/flowmetadataconditionoperator.md) | :heavy_check_mark:                                                                                   | The comparison to make on the currency code `value`.                                                 | includes                                                                                             |
| `value`                                                                                              | [components.FlowMetadataConditionValue](../../models/components/flowmetadataconditionvalue.md)       | :heavy_check_mark:                                                                                   | The metadata to compare the transaction to.                                                          |                                                                                                      |