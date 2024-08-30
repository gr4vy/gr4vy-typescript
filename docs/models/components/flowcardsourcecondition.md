# FlowCardSourceCondition

Card source conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowCardSourceCondition } from "@gr4vy/sdk/models/components";

let value: FlowCardSourceCondition = {
    name: "card_source",
    operator: "is_one_of",
    value: ["raw", "applepay"],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | [components.FlowCardSourceConditionName](../../models/components/flowcardsourceconditionname.md)         | :heavy_check_mark:                                                                                       | The type of match made for this rule.                                                                    | card_source                                                                                              |
| `operator`                                                                                               | [components.FlowCardSourceConditionOperator](../../models/components/flowcardsourceconditionoperator.md) | :heavy_check_mark:                                                                                       | The comparison to make on the `value`.                                                                   | is_one_of                                                                                                |
| `value`                                                                                                  | [components.FlowCardSourceConditionValue](../../models/components/flowcardsourceconditionvalue.md)[]     | :heavy_check_mark:                                                                                       | N/A                                                                                                      | [<br/>"raw",<br/>"applepay"<br/>]                                                                        |