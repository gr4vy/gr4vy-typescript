# FlowProductTypesCondition

Cart items' product types conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowProductTypesCondition } from "@gr4vy/sdk/models/components";

let value: FlowProductTypesCondition = {
    name: "product_types",
    operator: "includes_all",
    value: ["shipping_fee", "sales_tax"],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | [components.FlowProductTypesConditionName](../../models/components/flowproducttypesconditionname.md)         | :heavy_check_mark:                                                                                           | The type of match made for this rule.                                                                        | product_types                                                                                                |
| `operator`                                                                                                   | [components.FlowProductTypesConditionOperator](../../models/components/flowproducttypesconditionoperator.md) | :heavy_check_mark:                                                                                           | The comparison to make on the `value`.                                                                       | includes_all                                                                                                 |
| `value`                                                                                                      | [components.FlowProductTypesConditionValue](../../models/components/flowproducttypesconditionvalue.md)[]     | :heavy_check_mark:                                                                                           | Cart items' product types to compare the transaction to.                                                     | [<br/>"shipping_fee",<br/>"sales_tax"<br/>]                                                                  |