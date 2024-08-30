# FlowPaymentOptionOutcome

Outcome for checkout flow/select payment options action.
Each option is a Gr4vy payment option object.

## Example Usage

```typescript
import { FlowPaymentOptionOutcome } from "@gr4vy/sdk/models/components";

let value: FlowPaymentOptionOutcome = {
    type: "action",
    id: "card",
    label: "Card",
    group: "Bank",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.FlowPaymentOptionOutcomeType](../../models/components/flowpaymentoptionoutcometype.md)       | :heavy_minus_sign:                                                                                       | The type of this resource. Is always `action`.                                                           | action                                                                                                   |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Payment option identifier.                                                                               | card                                                                                                     |
| `label`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Verbose payment option name.                                                                             | Card                                                                                                     |
| `active`                                                                                                 | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | The status of the payment option, true if at least one underlying<br/>connection is active, otherwise false. |                                                                                                          |
| `group`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Optional group label for a given payment option, e.g. `Bank`.                                            | Bank                                                                                                     |
| `iconUrl`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Payment option icon URL.                                                                                 |                                                                                                          |