# FlowCardSchemeCondition

Card scheme conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowCardSchemeCondition } from "@gr4vy/sdk/models/components";

let value: FlowCardSchemeCondition = {
    name: "card_scheme",
    operator: "is_one_of",
    value: ["visa", "mastercard"],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | [components.FlowCardSchemeConditionName](../../models/components/flowcardschemeconditionname.md)         | :heavy_check_mark:                                                                                       | The type of match made for this rule.                                                                    | card_scheme                                                                                              |
| `operator`                                                                                               | [components.FlowCardSchemeConditionOperator](../../models/components/flowcardschemeconditionoperator.md) | :heavy_check_mark:                                                                                       | The comparison to make on the `value`.                                                                   | is_one_of                                                                                                |
| `value`                                                                                                  | [components.FlowCardSchemeConditionValue](../../models/components/flowcardschemeconditionvalue.md)[]     | :heavy_check_mark:                                                                                       | Card scheme(s) to compare the transaction to.                                                            | [<br/>"visa",<br/>"mastercard"<br/>]                                                                     |