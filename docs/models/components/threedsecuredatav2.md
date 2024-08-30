# ThreeDSecureDataV2

## Example Usage

```typescript
import { ThreeDSecureDataV2 } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureDataV2 = {
    cavv: "3q2+78r+ur7erb7vyv66vv8=",
    eci: "05",
    version: "<value>",
    directoryResponse: "C",
    scheme: "visa",
    authenticationResponse: "Y",
    directoryTransactionId: "c4e59ceb-a382-4d6a-bc87-385d591fa09d",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `cavv`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | The cardholder authentication value or AAV.                                                             | 3q2+78r+ur7erb7vyv66vv8=                                                                                |
| `eci`                                                                                                   | *string*                                                                                                | :heavy_check_mark:                                                                                      | The electronic commerce indicator for the 3DS transaction.                                              | 05                                                                                                      |
| `version`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | The version of 3-D Secure that was used.                                                                |                                                                                                         |
| `directoryResponse`                                                                                     | [components.DirectoryResponse](../../models/components/directoryresponse.md)                            | :heavy_check_mark:                                                                                      | The transaction status received as part of the authentication request.                                  | C                                                                                                       |
| `scheme`                                                                                                | [components.ThreeDSecureDataV2Scheme](../../models/components/threedsecuredatav2scheme.md)              | :heavy_minus_sign:                                                                                      | The scheme/brand of the card that is used for 3-D Secure.                                               | visa                                                                                                    |
| `authenticationResponse`                                                                                | [components.AuthenticationResponse](../../models/components/authenticationresponse.md)                  | :heavy_minus_sign:                                                                                      | The transaction status after a the 3DS challenge. This will<br/>be null in case of a frictionless 3DS flow. | Y                                                                                                       |
| `directoryTransactionId`                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | The transaction identifier.                                                                             | c4e59ceb-a382-4d6a-bc87-385d591fa09d                                                                    |