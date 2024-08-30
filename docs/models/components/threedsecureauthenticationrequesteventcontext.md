# ThreeDSecureAuthenticationRequestEventContext

3DS authentication context.

## Example Usage

```typescript
import { ThreeDSecureAuthenticationRequestEventContext } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureAuthenticationRequestEventContext = {
    url: "https://3dserver.example/auth",
    request: "{}",
    response: "{}",
    responseStatusCode: 200,
    cavv: "+9YDsoSIbiEgO+PFMdgGSF17Uqk=",
    eci: "05",
    directoryResponse: "C",
    directoryTransactionId: "8875884a-ac2f-42cb-b3f0-09b3ea3c0042",
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
| `cavv`                                            | *string*                                          | :heavy_minus_sign:                                | The 3DS CAVV value parsed from the `response`.    | +9YDsoSIbiEgO+PFMdgGSF17Uqk=                      |
| `eci`                                             | *string*                                          | :heavy_minus_sign:                                | The 3DS ECI value parsed from the `response`.     | 05                                                |
| `directoryResponse`                               | *string*                                          | :heavy_minus_sign:                                | The `transStatus` parsed from the `response`.     | C                                                 |
| `directoryTransactionId`                          | *string*                                          | :heavy_minus_sign:                                | The `dsTransID` parsed from the `response`.       | 8875884a-ac2f-42cb-b3f0-09b3ea3c0042              |
| `version`                                         | *string*                                          | :heavy_minus_sign:                                | The version of 3DS used.                          | 2.2.0                                             |