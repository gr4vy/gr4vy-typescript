# FlowIsSubsequentPaymentCondition

`is_subsequent_payment` flag conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowIsSubsequentPaymentCondition } from "@gr4vy/sdk/models/components";

let value: FlowIsSubsequentPaymentCondition = {
    name: "is_subsequent_payment",
    operator: "equal_to",
    value: true,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                     | [components.FlowIsSubsequentPaymentConditionName](../../models/components/flowissubsequentpaymentconditionname.md)         | :heavy_check_mark:                                                                                                         | The type of match made for this rule.                                                                                      | is_subsequent_payment                                                                                                      |
| `operator`                                                                                                                 | [components.FlowIsSubsequentPaymentConditionOperator](../../models/components/flowissubsequentpaymentconditionoperator.md) | :heavy_check_mark:                                                                                                         | The comparison to make on the `is_subsequent_payment` flag `value`.                                                        | equal_to                                                                                                                   |
| `value`                                                                                                                    | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | `is_subsequent_payment` flag value to compare the transaction to.                                                          | true                                                                                                                       |