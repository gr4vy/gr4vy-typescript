# FlowRuleCreateRequest

A request to create a flow rule.

## Example Usage

```typescript
import { FlowRuleCreateRequest } from "@gr4vy/sdk/models/components";

let value: FlowRuleCreateRequest = {
    description: "example rule.",
    conditions: [
        {
            name: "country",
            operator: "is_one_of",
            value: ["US", "DE"],
        },
    ],
    outcome: {
        type: "card-routing",
        result: [
            {
                paymentServiceId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
                instrument: "network_token",
                transformations: [
                    {
                        name: "force_mit",
                    },
                ],
            },
            {
                paymentServiceId: "d88aca32-07fb-46cd-a43f-86da02b73c21",
                instrument: "pan",
                transformations: [
                    {
                        name: "force_mit",
                    },
                ],
            },
        ],
        version: 2,
    },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Description of the flow rule.                                                                                   | example rule.                                                                                                   |
| `conditions`                                                                                                    | *components.FlowRuleCreateRequestConditions*[]                                                                  | :heavy_minus_sign:                                                                                              | One or more conditions that apply for this rule. Each condition needs to match for this rule to go into effect. |                                                                                                                 |
| `outcome`                                                                                                       | *components.FlowRuleCreateRequestOutcome*                                                                       | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |