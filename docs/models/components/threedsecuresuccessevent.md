# ThreeDSecureSuccessEvent

Details related to 3DS processing.

## Example Usage

```typescript
import { ThreeDSecureSuccessEvent } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureSuccessEvent = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "three-d-secure-success",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    context: {
        eci: "05",
        cavv: "3q2+78r+ur7erb7vyv66vv8=",
        directoryResponse: "C",
        authenticationResponse: "Y",
        directoryTransactionId: "c4e59ceb-a382-4d6a-bc87-385d591fa09d",
    },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.ThreeDSecureSuccessEventType](../../models/components/threedsecuresuccesseventtype.md)       | :heavy_minus_sign:                                                                                       | The type of this resource. Is always `transaction-event`.                                                | transaction-event                                                                                        |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The unique identifier for this event.                                                                    | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                     |
| `name`                                                                                                   | [components.ThreeDSecureSuccessEventName](../../models/components/threedsecuresuccesseventname.md)       | :heavy_minus_sign:                                                                                       | The name of this resource. Is always `three-d-secure-success`.                                           | three-d-secure-success                                                                                   |
| `createdAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time when this transaction was created in our system.                                       | 2013-07-16T19:23:00.000+00:00                                                                            |
| `context`                                                                                                | [components.ThreeDSecureSuccessEventContext](../../models/components/threedsecuresuccesseventcontext.md) | :heavy_minus_sign:                                                                                       | 3DS context.                                                                                             |                                                                                                          |