# FlowCardTypeCondition

Card type condition with a name, operator, and value.

## Example Usage

```typescript
import { FlowCardTypeCondition } from "@gr4vy/sdk/models/components";

let value: FlowCardTypeCondition = {
    name: "card_type",
    operator: "is_one_of",
    value: ["credit"],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | [components.FlowCardTypeConditionName](../../models/components/flowcardtypeconditionname.md)         | :heavy_check_mark:                                                                                   | The type of match made for this rule.                                                                | card_type                                                                                            |
| `operator`                                                                                           | [components.FlowCardTypeConditionOperator](../../models/components/flowcardtypeconditionoperator.md) | :heavy_check_mark:                                                                                   | The comparison to make on the `value`.                                                               | is_one_of                                                                                            |
| `value`                                                                                              | [components.FlowCardTypeConditionValue](../../models/components/flowcardtypeconditionvalue.md)[]     | :heavy_check_mark:                                                                                   | Card type to compare the transaction to.                                                             | [<br/>"credit"<br/>]                                                                                 |