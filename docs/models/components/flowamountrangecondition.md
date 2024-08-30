# FlowAmountRangeCondition

Amount range conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowAmountRangeCondition } from "@gr4vy/sdk/models/components";

let value: FlowAmountRangeCondition = {
    name: "amount",
    operator: "is_between",
    value: {
        currency: "USD",
        min: 1,
        max: 200,
    },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                         | [components.FlowAmountRangeConditionName](../../models/components/flowamountrangeconditionname.md)                             | :heavy_check_mark:                                                                                                             | The type of match made for this rule.                                                                                          | amount                                                                                                                         |
| `operator`                                                                                                                     | [components.FlowAmountRangeConditionOperator](../../models/components/flowamountrangeconditionoperator.md)                     | :heavy_check_mark:                                                                                                             | The comparison to make on the currency code `value`.                                                                           | is_between                                                                                                                     |
| `value`                                                                                                                        | [components.FlowAmountRangeConditionValue](../../models/components/flowamountrangeconditionvalue.md)                           | :heavy_check_mark:                                                                                                             | Amount value compare the transaction to.                                                                                       | {<br/>"Amount condition value": {<br/>"value": {<br/>"description": "example amount value.",<br/>"currency": "USD",<br/>"min": 1,<br/>"max": 200<br/>}<br/>}<br/>} |