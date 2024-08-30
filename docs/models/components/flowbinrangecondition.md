# FlowBINRangeCondition

BIN range conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowBINRangeCondition } from "@gr4vy/sdk/models/components";

let value: FlowBINRangeCondition = {
    name: "card_bin",
    operator: "is_one_of",
    value: ["41410000-42429999"],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | [components.FlowBINRangeConditionName](../../models/components/flowbinrangeconditionname.md)         | :heavy_check_mark:                                                                                   | The type of match made for this rule.                                                                | card_bin                                                                                             |
| `operator`                                                                                           | [components.FlowBINRangeConditionOperator](../../models/components/flowbinrangeconditionoperator.md) | :heavy_check_mark:                                                                                   | The comparison to make on the `card_bin` `value`.                                                    | is_one_of                                                                                            |
| `value`                                                                                              | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | BIN range to compare with the transaction. A card BIN is<br/>8 characters long at maximum.           | [<br/>"41410000-42429999"<br/>]                                                                      |