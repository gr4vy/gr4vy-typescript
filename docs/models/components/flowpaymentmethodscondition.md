# FlowPaymentMethodsCondition

Payment methods condition with a name, operator, and value. This
condition is only for use with the `decline-early` action.

## Example Usage

```typescript
import { FlowPaymentMethodsCondition } from "@gr4vy/sdk/models/components";

let value: FlowPaymentMethodsCondition = {
    name: "payment_method",
    operator: "is_one_of",
    value: ["paypal", "shopeepay"],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                           | [components.FlowPaymentMethodsConditionName](../../models/components/flowpaymentmethodsconditionname.md)         | :heavy_check_mark:                                                                                               | The type of match made for this rule.                                                                            | payment_method                                                                                                   |
| `operator`                                                                                                       | [components.FlowPaymentMethodsConditionOperator](../../models/components/flowpaymentmethodsconditionoperator.md) | :heavy_check_mark:                                                                                               | The comparison to make on the `value`.                                                                           | is_one_of                                                                                                        |
| `value`                                                                                                          | [components.FlowPaymentMethodsConditionValue](../../models/components/flowpaymentmethodsconditionvalue.md)[]     | :heavy_check_mark:                                                                                               | Payment method(s) to compare the transaction to.                                                                 | [<br/>"paypal",<br/>"shopeepay"<br/>]                                                                            |