# ErrorData

The error data received from our 3DS server. This will not be populated if the customer failed the authentication with a status code of `N`, `R`, or `U`.  To see full details about the 3DS calls in those situations please use our transaction events API.

## Example Usage

```typescript
import { ErrorData } from "@gr4vy/sdk/models/components";

let value: ErrorData = {
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