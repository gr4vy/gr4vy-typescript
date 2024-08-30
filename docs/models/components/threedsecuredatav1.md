# ThreeDSecureDataV1

Base model with JSON encoders.

## Example Usage

```typescript
import { ThreeDSecureDataV1 } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureDataV1 = {
    cavv: "<value>",
    eci: "<value>",
    version: "<value>",
    directoryResponse: "<value>",
    authenticationResponse: "<value>",
    cavvAlgorithm: "<value>",
    xid: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `cavv`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `eci`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `version`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `directoryResponse`                                            | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `scheme`                                                       | [components.CardScheme](../../models/components/cardscheme.md) | :heavy_minus_sign:                                             | An enumeration.                                                |
| `authenticationResponse`                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `cavvAlgorithm`                                                | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `xid`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |