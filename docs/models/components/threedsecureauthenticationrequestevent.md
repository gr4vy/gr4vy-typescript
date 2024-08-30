# ThreeDSecureAuthenticationRequestEvent

The result and raw data for a 3DS authorization call.

## Example Usage

```typescript
import { ThreeDSecureAuthenticationRequestEvent } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureAuthenticationRequestEvent = {
    type: "transaction-event",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    name: "three-d-secure-authentication-request",
    createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
    context: {
        url: "https://3dserver.example/auth",
        request: "{}",
        response: "{}",
        responseStatusCode: 200,
        cavv: "+9YDsoSIbiEgO+PFMdgGSF17Uqk=",
        eci: "05",
        directoryResponse: "C",
        directoryTransactionId: "8875884a-ac2f-42cb-b3f0-09b3ea3c0042",
        version: "2.2.0",
    },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [components.ThreeDSecureAuthenticationRequestEventType](../../models/components/threedsecureauthenticationrequesteventtype.md)       | :heavy_minus_sign:                                                                                                                   | The type of this resource. Is always `transaction-event`.                                                                            | transaction-event                                                                                                                    |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The unique identifier for this event.                                                                                                | fe26475d-ec3e-4884-9553-f7356683f7f9                                                                                                 |
| `name`                                                                                                                               | [components.ThreeDSecureAuthenticationRequestEventName](../../models/components/threedsecureauthenticationrequesteventname.md)       | :heavy_minus_sign:                                                                                                                   | The name of this resource. Is always `three-d-secure-authentication-request`.                                                        | three-d-secure-authentication-request                                                                                                |
| `createdAt`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_minus_sign:                                                                                                                   | The date and time when this transaction was created in our system.                                                                   | 2013-07-16T19:23:00.000+00:00                                                                                                        |
| `context`                                                                                                                            | [components.ThreeDSecureAuthenticationRequestEventContext](../../models/components/threedsecureauthenticationrequesteventcontext.md) | :heavy_minus_sign:                                                                                                                   | 3DS authentication context.                                                                                                          |                                                                                                                                      |