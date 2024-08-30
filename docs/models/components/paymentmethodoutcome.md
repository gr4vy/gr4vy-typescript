# PaymentMethodOutcome

Defines the outcome of a rule in a flow where the result
is a list of payment types.

## Example Usage

```typescript
import { PaymentMethodOutcome } from "@gr4vy/sdk/models/components";

let value: PaymentMethodOutcome = {
    type: "list",
    result: ["card", "paypal"],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [components.FlowRuleMethodOutcomeOutcomeType](../../models/components/flowrulemethodoutcomeoutcometype.md)       | :heavy_check_mark:                                                                                               | The type of action outcome for the given rule.                                                                   | list                                                                                                             |
| `result`                                                                                                         | [components.FlowRuleMethodOutcomeOutcomeResult](../../models/components/flowrulemethodoutcomeoutcomeresult.md)[] | :heavy_check_mark:                                                                                               | Results for a given flow action.                                                                                 | [<br/>"card",<br/>"paypal"<br/>]                                                                                 |