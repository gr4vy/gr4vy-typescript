# FlowPaymentSourceCondition

Payment source conditions with a name, operator, and value.

## Example Usage

```typescript
import { FlowPaymentSourceCondition } from "@gr4vy/sdk/models/components";

let value: FlowPaymentSourceCondition = {
    name: "payment_source",
    operator: "is_one_of",
    value: ["recurring", "installment"],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | [components.FlowPaymentSourceConditionName](../../models/components/flowpaymentsourceconditionname.md)         | :heavy_check_mark:                                                                                             | The type of match made for this rule.                                                                          | payment_source                                                                                                 |
| `operator`                                                                                                     | [components.FlowPaymentSourceConditionOperator](../../models/components/flowpaymentsourceconditionoperator.md) | :heavy_check_mark:                                                                                             | The comparison to make on the payment source `value`.                                                          | is_one_of                                                                                                      |
| `value`                                                                                                        | [components.FlowPaymentSourceConditionValue](../../models/components/flowpaymentsourceconditionvalue.md)[]     | :heavy_check_mark:                                                                                             | Payment sources to compare the transaction to.                                                                 | [<br/>"recurring",<br/>"installment"<br/>]                                                                     |