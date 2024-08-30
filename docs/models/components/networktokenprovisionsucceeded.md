# NetworkTokenProvisionSucceeded

This event logs the request and response details of HTTP calls made to provision a network token, in case the call succeeded.

## Example Usage

```typescript
import { NetworkTokenProvisionSucceeded } from "@gr4vy/sdk/models/components";

let value: NetworkTokenProvisionSucceeded = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "network-token-provision-succeeded",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.NetworkTokenProvisionSucceededType](../../models/components/networktokenprovisionsucceededtype.md)       | :heavy_minus_sign:                                                                                                   | The type of this resource. Is always `transaction-event`.                                                            | transaction-event                                                                                                    |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The unique identifier for this event.                                                                                | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                 |
| `name`                                                                                                               | [components.NetworkTokenProvisionSucceededName](../../models/components/networktokenprovisionsucceededname.md)       | :heavy_minus_sign:                                                                                                   | The name of this resource. Is always `network-token-provision-succeeded`.                                            | network-token-provision-succeeded                                                                                    |
| `createdAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The date and time when this event was created in our system.                                                         | 2013-07-16T19:23:00.000+00:00                                                                                        |
| `context`                                                                                                            | [components.NetworkTokenProvisionSucceededContext](../../models/components/networktokenprovisionsucceededcontext.md) | :heavy_minus_sign:                                                                                                   | Additional context for this event.                                                                                   |                                                                                                                      |