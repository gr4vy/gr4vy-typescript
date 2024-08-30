# FlowPaymentMethodCondition

Payment method conditions with a name, operator, and value. This
condition is only for use with the `route-transaction` action.

## Example Usage

```typescript
import { FlowPaymentMethodCondition } from "@gr4vy/sdk/models/components";

let value: FlowPaymentMethodCondition = {
    name: "payment_method",
    operator: "equal_to",
    value: "card",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | [components.FlowPaymentMethodConditionName](../../models/components/flowpaymentmethodconditionname.md)         | :heavy_check_mark:                                                                                             | The type of match made for this rule.                                                                          | payment_method                                                                                                 |
| `operator`                                                                                                     | [components.FlowPaymentMethodConditionOperator](../../models/components/flowpaymentmethodconditionoperator.md) | :heavy_check_mark:                                                                                             | The comparison to make on the `value`.                                                                         | equal_to                                                                                                       |
| `value`                                                                                                        | [components.FlowPaymentMethodConditionValue](../../models/components/flowpaymentmethodconditionvalue.md)       | :heavy_check_mark:                                                                                             | The payment method to compare the transaction to.                                                              | card                                                                                                           |