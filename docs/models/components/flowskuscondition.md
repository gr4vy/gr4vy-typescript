# FlowSKUsCondition

Cart items' SKUs conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowSKUsCondition } from "@gr4vy/sdk/models/components";

let value: FlowSKUsCondition = {
    name: "skus",
    operator: "includes_all",
    value: ["YZ1234", "AB2345", "TU4567"],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | [components.FlowSKUsConditionName](../../models/components/flowskusconditionname.md)         | :heavy_check_mark:                                                                           | The type of match made for this rule.                                                        | skus                                                                                         |
| `operator`                                                                                   | [components.FlowSKUsConditionOperator](../../models/components/flowskusconditionoperator.md) | :heavy_check_mark:                                                                           | The comparison to make on the `value`.                                                       | includes_all                                                                                 |
| `value`                                                                                      | *string*[]                                                                                   | :heavy_check_mark:                                                                           | Cart items' SKU values to compare the transaction to.                                        | [<br/>"YZ1234",<br/>"AB2345",<br/>"TU4567"<br/>]                                             |