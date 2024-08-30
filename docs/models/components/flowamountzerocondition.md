# FlowAmountZeroCondition

Amount conditions matching a value of 0 in any currency.

## Example Usage

```typescript
import { FlowAmountZeroCondition } from "@gr4vy/sdk/models/components";

let value: FlowAmountZeroCondition = {
    name: "amount_zero",
    operator: "equal_to",
    value: 0,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | [components.FlowAmountZeroConditionName](../../models/components/flowamountzeroconditionname.md)         | :heavy_check_mark:                                                                                       | The type of match made for this rule.                                                                    | amount_zero                                                                                              |
| `operator`                                                                                               | [components.FlowAmountZeroConditionOperator](../../models/components/flowamountzeroconditionoperator.md) | :heavy_check_mark:                                                                                       | The comparison to make on the transaction `value`.                                                       | equal_to                                                                                                 |
| `value`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The value of the transaction must be 0.                                                                  | 0                                                                                                        |