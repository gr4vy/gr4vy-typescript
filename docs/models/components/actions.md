# Actions

A list of actions.

## Example Usage

```typescript
import { Actions } from "@gr4vy/sdk/models/components";

let value: Actions = {
    items: [
        {
            type: "action",
            id: "route-transaction",
            flow: "checkout",
            ruleId: "8724fd24-5489-4a5d-90fd-0604df7d3b85",
            createdAt: new Date("2012-12-12T10:53:43+00:00"),
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
        },
    ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [components.Action](../../models/components/action.md)[] | :heavy_minus_sign:                                       | A list of actions.                                       |