# FlowRuleOutcomes

Defines the outcome of a rule in a flow.
Currently the outcomes can be a boolean value, or a list of string
values. The meaning of this outcome depends on the `action` this rule
is triggered for.

## Example Usage

```typescript
import { FlowRuleOutcomes } from "@gr4vy/sdk/models/components";

let value: FlowRuleOutcomes = {
    items: [
        {
            type: "action",
            id: "card",
            label: "Card",
            group: "Bank",
        },
    ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `items`                              | *components.FlowRuleOutcomesItems*[] | :heavy_minus_sign:                   | A list of outcomes.                  |