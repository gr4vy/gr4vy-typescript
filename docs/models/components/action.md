# Action

An action taken for a transaction.

## Example Usage

```typescript
import { Action } from "@gr4vy/sdk/models/components";

let value: Action = {
    type: "action",
    id: "route-transaction",
    flow: "checkout",
    ruleId: "8724fd24-5489-4a5d-90fd-0604df7d3b85",
    createdAt: new Date("2012-12-12T10:53:43+00:00"),
    outcome: {
        type: "list",
        result: ["fe26475d-ec3e-4884-9553-f7356683f7f9", "d88aca32-07fb-46cd-a43f-86da02b73c21"],
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.ActionType](../../models/components/actiontype.md)                                | :heavy_minus_sign:                                                                            | The type of this resource. Is always `action`.                                                | action                                                                                        |
| `id`                                                                                          | [components.Id](../../models/components/id.md)                                                | :heavy_minus_sign:                                                                            | The identifier for the action.                                                                | route-transaction                                                                             |
| `flow`                                                                                        | [components.Flow](../../models/components/flow.md)                                            | :heavy_minus_sign:                                                                            | The name of the Flow.                                                                         | checkout                                                                                      |
| `ruleId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique ID of the rule triggered.                                                          | 8724fd24-5489-4a5d-90fd-0604df7d3b85                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when this action was created.                                               | 2012-12-12T10:53:43+00:00                                                                     |
| `outcome`                                                                                     | *components.Outcome*                                                                          | :heavy_minus_sign:                                                                            | The outcome of the action.                                                                    |                                                                                               |