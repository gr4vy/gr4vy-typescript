# FlowRuleThreeDSecureOutcome

Defines the outcome of a rule in a flow for 3DS.

## Example Usage

```typescript
import { FlowRuleThreeDSecureOutcome } from "@gr4vy/sdk/models/components";

let value: FlowRuleThreeDSecureOutcome = {
    type: "three-d-secure",
    result: "attempt",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.FlowRuleThreeDSecureOutcomeType](../../models/components/flowrulethreedsecureoutcometype.md)     | :heavy_check_mark:                                                                                           | The type of action outcome for the given rule.                                                               | three-d-secure                                                                                               |
| `result`                                                                                                     | [components.FlowRuleThreeDSecureOutcomeResult](../../models/components/flowrulethreedsecureoutcomeresult.md) | :heavy_check_mark:                                                                                           | Result for a given flow action.                                                                              | attempt                                                                                                      |