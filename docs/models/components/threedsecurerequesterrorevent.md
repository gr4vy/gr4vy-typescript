# ThreeDSecureRequestErrorEvent

Error details for a failed 3DS call.

## Example Usage

```typescript
import { ThreeDSecureRequestErrorEvent } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureRequestErrorEvent = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "three-d-secure-request-error",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    context: {
        url: "https://3dserver.example/auth",
        reason: "TIMEOUT",
    },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [components.ThreeDSecureRequestErrorEventType](../../models/components/threedsecurerequesterroreventtype.md)       | :heavy_minus_sign:                                                                                                 | The type of this resource. Is always `transaction-event`.                                                          | transaction-event                                                                                                  |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The unique identifier for this event.                                                                              | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                               |
| `name`                                                                                                             | [components.ThreeDSecureRequestErrorEventName](../../models/components/threedsecurerequesterroreventname.md)       | :heavy_minus_sign:                                                                                                 | The name of this resource. Is always `three-d-secure-request-error`.                                               | three-d-secure-request-error                                                                                       |
| `createdAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_minus_sign:                                                                                                 | The date and time when this transaction was created in our system.                                                 | 2013-07-16T19:23:00.000+00:00                                                                                      |
| `context`                                                                                                          | [components.ThreeDSecureRequestErrorEventContext](../../models/components/threedsecurerequesterroreventcontext.md) | :heavy_minus_sign:                                                                                                 | 3DS post-authentication context.                                                                                   |                                                                                                                    |