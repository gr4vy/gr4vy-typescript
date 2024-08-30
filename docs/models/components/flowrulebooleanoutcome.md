# FlowRuleBooleanOutcome

Defines the outcome of a rule in a flow where the result
is a boolean.

## Example Usage

```typescript
import { FlowRuleBooleanOutcome } from "@gr4vy/sdk/models/components";

let value: FlowRuleBooleanOutcome = {
    type: "boolean",
    result: false,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [components.FlowRuleBooleanOutcomeType](../../models/components/flowrulebooleanoutcometype.md) | :heavy_check_mark:                                                                             | The type of action outcome for the given rule.                                                 | boolean                                                                                        |
| `result`                                                                                       | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Results for a given flow action.                                                               |                                                                                                |