# FlowRuleUpdateRequest

A request to update a rule.

## Example Usage

```typescript
import { FlowRuleUpdateRequest } from "@gr4vy/sdk/models/components";

let value: FlowRuleUpdateRequest = {
    description: "example rule.",
    conditions: [
        {
            name: "amount_zero",
            operator: "equal_to",
            value: 0,
        },
    ],
    outcome: {
        type: "list",
        result: ["fe26475d-ec3e-4884-9553-f7356683f7f9", "d88aca32-07fb-46cd-a43f-86da02b73c21"],
    },
    position: 2,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Description of the flow rule.                                                                                   | example rule.                                                                                                   |
| `conditions`                                                                                                    | *components.FlowRuleUpdateRequestConditions*[]                                                                  | :heavy_minus_sign:                                                                                              | One or more conditions that apply for this rule. Each condition needs to match for this rule to go into effect. |                                                                                                                 |
| `outcome`                                                                                                       | *components.FlowRuleUpdateRequestOutcome*                                                                       | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `position`                                                                                                      | *number*                                                                                                        | :heavy_check_mark:                                                                                              | The position of the rule in the flow.                                                                           | 2                                                                                                               |