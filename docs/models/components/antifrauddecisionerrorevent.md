# AntiFraudDecisionErrorEvent

This event logs the reason why we were unable to get an anti-fraud decision.

## Example Usage

```typescript
import { AntiFraudDecisionErrorEvent } from "@gr4vy/sdk/models/components";

let value: AntiFraudDecisionErrorEvent = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "anti-fraud-decision-error",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    context: {
        reason: "Network Error",
    },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [components.AntiFraudDecisionErrorEventType](../../models/components/antifrauddecisionerroreventtype.md)       | :heavy_minus_sign:                                                                                             | The type of this resource. Is always `transaction-event`.                                                      | transaction-event                                                                                              |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The unique identifier for this event.                                                                          | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                           |
| `name`                                                                                                         | [components.AntiFraudDecisionErrorEventName](../../models/components/antifrauddecisionerroreventname.md)       | :heavy_minus_sign:                                                                                             | The name of this resource. Is always `anti-fraud-decision-error`.                                              | anti-fraud-decision-error                                                                                      |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_minus_sign:                                                                                             | The date and time when this transaction was created in our system.                                             | 2013-07-16T19:23:00.000+00:00                                                                                  |
| `context`                                                                                                      | [components.AntiFraudDecisionErrorEventContext](../../models/components/antifrauddecisionerroreventcontext.md) | :heavy_minus_sign:                                                                                             | Additional context for this event.                                                                             |                                                                                                                |