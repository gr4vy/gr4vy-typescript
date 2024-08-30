# FlowRuleMethodOutcome

Defines the outcome of a rule in a flow where the result
is a list of payment types.

## Example Usage

```typescript
import { FlowRuleMethodOutcome } from "@gr4vy/sdk/models/components";

let value: FlowRuleMethodOutcome = {
    type: "list",
    result: ["card", "paypal"],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [components.FlowRuleMethodOutcomeType](../../models/components/flowrulemethodoutcometype.md)       | :heavy_check_mark:                                                                                 | The type of action outcome for the given rule.                                                     | list                                                                                               |
| `result`                                                                                           | [components.FlowRuleMethodOutcomeResult](../../models/components/flowrulemethodoutcomeresult.md)[] | :heavy_check_mark:                                                                                 | Results for a given flow action.                                                                   | [<br/>"card",<br/>"paypal"<br/>]                                                                   |