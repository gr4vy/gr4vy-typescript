# AntiFraudDecisionEvent

This event logs the request and response details of HTTP calls made to an anti-fraud provider.

## Example Usage

```typescript
import { AntiFraudDecisionEvent } from "@gr4vy/sdk/models/components";

let value: AntiFraudDecisionEvent = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "anti-fraud-decision",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    context: {
        antiFraudServiceCheckId: "decision-1234",
        decision: "ACCEPT",
    },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [components.AntiFraudDecisionEventType](../../models/components/antifrauddecisioneventtype.md)       | :heavy_minus_sign:                                                                                   | The type of this resource. Is always `transaction-event`.                                            | transaction-event                                                                                    |
| `id`                                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The unique identifier for this event.                                                                | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                 |
| `name`                                                                                               | [components.AntiFraudDecisionEventName](../../models/components/antifrauddecisioneventname.md)       | :heavy_minus_sign:                                                                                   | The name of this resource. Is always `anti-fraud-decision`.                                          | anti-fraud-decision                                                                                  |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The date and time when this transaction was created in our system.                                   | 2013-07-16T19:23:00.000+00:00                                                                        |
| `context`                                                                                            | [components.AntiFraudDecisionEventContext](../../models/components/antifrauddecisioneventcontext.md) | :heavy_minus_sign:                                                                                   | Additional context for this event.                                                                   |                                                                                                      |