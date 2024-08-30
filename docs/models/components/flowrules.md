# FlowRules

A list of rule in a flow.

## Example Usage

```typescript
import { FlowRules } from "@gr4vy/sdk/models/components";

let value: FlowRules = {
    items: [
        {
            type: "rule",
            id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
            merchantAccountId: "default",
            description: "example rule.",
            flow: "checkout",
            action: "select-payment-options",
            conditions: [
                {
                    name: "amount",
                    operator: "is_between",
                    value: {
                        currency: "USD",
                        min: 1,
                        max: 200,
                    },
                },
            ],
            outcome: {
                type: "list",
                result: [
                    "fe26475d-ec3e-4884-9553-f7356683f7f9",
                    "d88aca32-07fb-46cd-a43f-86da02b73c21",
                ],
            },
            position: 2,
            createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
            updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
        },
    ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `items`                                                      | [components.FlowRule](../../models/components/flowrule.md)[] | :heavy_minus_sign:                                           | A list of rules.                                             |