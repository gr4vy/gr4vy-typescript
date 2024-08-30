# NetworkTokenCryptogramProvisionFailed

This event logs the request and response details of HTTP calls made to provision a cryptogram for a network token, in case the call failed.

## Example Usage

```typescript
import { NetworkTokenCryptogramProvisionFailed } from "@gr4vy/sdk/models/components";

let value: NetworkTokenCryptogramProvisionFailed = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "network-token-cryptogram-provision-failed",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    context: {
        reason: "Network Error",
    },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [components.NetworkTokenCryptogramProvisionFailedType](../../models/components/networktokencryptogramprovisionfailedtype.md)       | :heavy_minus_sign:                                                                                                                 | The type of this resource. Is always `transaction-event`.                                                                          | transaction-event                                                                                                                  |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The unique identifier for this event.                                                                                              | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                               |
| `name`                                                                                                                             | [components.NetworkTokenCryptogramProvisionFailedName](../../models/components/networktokencryptogramprovisionfailedname.md)       | :heavy_minus_sign:                                                                                                                 | The name of this resource. Is always `network-token-cryptogram-provision-failed`.                                                  | network-token-cryptogram-provision-failed                                                                                          |
| `createdAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time when this event was created in our system.                                                                       | 2013-07-16T19:23:00.000+00:00                                                                                                      |
| `context`                                                                                                                          | [components.NetworkTokenCryptogramProvisionFailedContext](../../models/components/networktokencryptogramprovisionfailedcontext.md) | :heavy_minus_sign:                                                                                                                 | Additional context for this event.                                                                                                 |                                                                                                                                    |