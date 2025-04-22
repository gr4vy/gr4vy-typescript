# ThreeDSecureError

## Example Usage

```typescript
import { ThreeDSecureError } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureError = {
  code: "305",
  description: "Invalid ThreeDSCompInd",
  detail: "The threeDSCompInd must be 'Y' when successful",
  component: "C",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `code`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | The error code.                                                     | 305                                                                 |
| `description`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | The error description.                                              | Invalid ThreeDSCompInd                                              |
| `detail`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | Detail about the 3DS error.                                         | The threeDSCompInd must be 'Y' when successful                      |
| `component`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | Code indicating the 3-D Secure component that identified the error. | C                                                                   |