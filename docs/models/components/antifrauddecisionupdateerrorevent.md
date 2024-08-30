# AntiFraudDecisionUpdateErrorEvent

This event logs the failure reason when attempting to update the decision on the anti-fraud provider.

## Example Usage

```typescript
import { AntiFraudDecisionUpdateErrorEvent } from "@gr4vy/sdk/models/components";

let value: AntiFraudDecisionUpdateErrorEvent = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "anti-fraud-decision-update-error",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    context: {
        antiFraudServiceCheckId: "decision-1234",
        decision: "ACCEPT",
        reason: "Network Error",
    },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [components.AntiFraudDecisionUpdateErrorEventType](../../models/components/antifrauddecisionupdateerroreventtype.md)       | :heavy_minus_sign:                                                                                                         | The type of this resource. Is always `transaction-event`.                                                                  | transaction-event                                                                                                          |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The unique identifier for this event.                                                                                      | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                       |
| `name`                                                                                                                     | [components.AntiFraudDecisionUpdateErrorEventName](../../models/components/antifrauddecisionupdateerroreventname.md)       | :heavy_minus_sign:                                                                                                         | The name of this resource. Is always `anti-fraud-decision-update-error`.                                                   | anti-fraud-decision-update-error                                                                                           |
| `createdAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_minus_sign:                                                                                                         | The date and time when this transaction event was created in our system.                                                   | 2013-07-16T19:23:00.000+00:00                                                                                              |
| `context`                                                                                                                  | [components.AntiFraudDecisionUpdateErrorEventContext](../../models/components/antifrauddecisionupdateerroreventcontext.md) | :heavy_minus_sign:                                                                                                         | Additional context for this event.                                                                                         |                                                                                                                            |