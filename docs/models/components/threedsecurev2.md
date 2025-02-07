# ThreeDSecureV2

Base model with JSON encoders.

## Example Usage

```typescript
import { ThreeDSecureV2 } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureV2 = {
  version: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `version`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `authenticationResponse` | *string*                 | :heavy_minus_sign:       | N/A                      |
| `directoryResponse`      | *string*                 | :heavy_minus_sign:       | N/A                      |
| `directoryTransactionId` | *string*                 | :heavy_minus_sign:       | N/A                      |
| `transactionReason`      | *string*                 | :heavy_minus_sign:       | N/A                      |
| `cavv`                   | *string*                 | :heavy_minus_sign:       | N/A                      |
| `eci`                    | *string*                 | :heavy_minus_sign:       | N/A                      |
| `cardholderInfo`         | *string*                 | :heavy_minus_sign:       | N/A                      |