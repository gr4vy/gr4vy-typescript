# ThreeDSecureDataV2

Base model with JSON encoders.

## Example Usage

```typescript
import { ThreeDSecureDataV2 } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureDataV2 = {
    cavv: "<value>",
    eci: "<value>",
    version: "<value>",
    directoryResponse: "<value>",
    directoryTransactionId: "<value>",
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
| `authenticationResponse`                                       | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `directoryTransactionId`                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |