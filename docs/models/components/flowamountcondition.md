# FlowAmountCondition

Amount conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowAmountCondition } from "@gr4vy/sdk/models/components";

let value: FlowAmountCondition = {
    name: "amount",
    operator: "less_than",
    value: {
        currency: "USD",
        value: 1,
    },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                 | [components.FlowAmountConditionName](../../models/components/flowamountconditionname.md)                               | :heavy_check_mark:                                                                                                     | The type of match made for this rule.                                                                                  | amount                                                                                                                 |
| `operator`                                                                                                             | [components.Operator](../../models/components/operator.md)                                                             | :heavy_check_mark:                                                                                                     | The comparison to make on the currency code `value`.                                                                   | less_than                                                                                                              |
| `value`                                                                                                                | [components.Value](../../models/components/value.md)                                                                   | :heavy_check_mark:                                                                                                     | Amount value compare the transaction to.                                                                               | {<br/>"Amount condition value": {<br/>"value": {<br/>"description": "example amount value.",<br/>"currency": "USD",<br/>"value": 100<br/>}<br/>}<br/>} |