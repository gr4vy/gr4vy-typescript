# UUIDsListOutcome

Defines the outcome of a rule in a flow where the result
is a list of UUIDs.

Depending on the flow and action where this outcome is used, the UUIDs
may have an important meaning like the ID of a payment service to be
used (this is the case for `redirect-transaction` flow and
`route-transaction` action).

## Example Usage

```typescript
import { UUIDsListOutcome } from "@gr4vy/sdk/models/components";

let value: UUIDsListOutcome = {
    type: "list",
    result: ["fe26475d-ec3e-4884-9553-f7356683f7f9", "d88aca32-07fb-46cd-a43f-86da02b73c21"],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [components.FlowRuleUUIDsListOutcomeOutcomeType](../../models/components/flowruleuuidslistoutcomeoutcometype.md) | :heavy_check_mark:                                                                                               | The type of action outcome for the given rule.                                                                   | list                                                                                                             |
| `result`                                                                                                         | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | Results for a given flow action.                                                                                 | [<br/>"fe26475d-ec3e-4884-9553-f7356683f7f9",<br/>"d88aca32-07fb-46cd-a43f-86da02b73c21"<br/>]                   |