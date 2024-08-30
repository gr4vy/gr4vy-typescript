# ThreeDSecurePreparationRequestEventContext

3DS pre-authentication context.

## Example Usage

```typescript
import { ThreeDSecurePreparationRequestEventContext } from "@gr4vy/sdk/models/components";

let value: ThreeDSecurePreparationRequestEventContext = {
    url: "https://3dserver.example/auth",
    request: "{}",
    response: "{}",
    responseStatusCode: 200,
    isEnrolled: true,
    version: "2.2.0",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `url`                                             | *string*                                          | :heavy_minus_sign:                                | The URL that was called for this request.         | https://3dserver.example/auth                     |
| `request`                                         | *string*                                          | :heavy_minus_sign:                                | The request body sent to the `url`.               | {}                                                |
| `response`                                        | *string*                                          | :heavy_minus_sign:                                | The response body received from the `url`.        | {}                                                |
| `responseStatusCode`                              | *number*                                          | :heavy_minus_sign:                                | The response status code received from the `url`. | 200                                               |
| `isEnrolled`                                      | *boolean*                                         | :heavy_minus_sign:                                | If the card is enrolled for 3DS.                  | true                                              |
| `version`                                         | *string*                                          | :heavy_minus_sign:                                | The version of 3DS extracted from the `response.  | 2.2.0                                             |