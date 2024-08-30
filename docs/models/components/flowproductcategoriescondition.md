# FlowProductCategoriesCondition

Cart items' product categories conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowProductCategoriesCondition } from "@gr4vy/sdk/models/components";

let value: FlowProductCategoriesCondition = {
    name: "product_categories",
    operator: "includes_all",
    value: ["electronics", "printers"],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                 | [components.FlowProductCategoriesConditionName](../../models/components/flowproductcategoriesconditionname.md)         | :heavy_check_mark:                                                                                                     | The type of match made for this rule.                                                                                  | product_categories                                                                                                     |
| `operator`                                                                                                             | [components.FlowProductCategoriesConditionOperator](../../models/components/flowproductcategoriesconditionoperator.md) | :heavy_check_mark:                                                                                                     | The comparison to make on the `value`.                                                                                 | includes_all                                                                                                           |
| `value`                                                                                                                | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | Cart items' product categories to compare the transaction to.                                                          | [<br/>"electronics",<br/>"printers"<br/>]                                                                              |