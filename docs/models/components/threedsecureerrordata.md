# ThreeDSecureErrorData

The error data received from our 3DS server. This will not be
populated if the customer failed the authentication with a
status code of `N`, `R`, or `U`.  To see full details about
the 3DS calls in those situations please use our transaction
events API.

## Example Usage

```typescript
import { ThreeDSecureErrorData } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureErrorData = {
    description: "Invalid ThreeDSCompInd",
    detail: "The threeDSCompInd must be 'Y' when successful",
    code: "305",
    component: "C",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `description`                                                        | *string*                                                             | :heavy_check_mark:                                                   | The error description.                                               | Invalid ThreeDSCompInd                                               |
| `detail`                                                             | *string*                                                             | :heavy_check_mark:                                                   | Detail for the error.                                                | The threeDSCompInd must be 'Y' when successful                       |
| `code`                                                               | *string*                                                             | :heavy_check_mark:                                                   | The error code.                                                      | 305                                                                  |
| `component`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Code indicating the 3-D Secure component that identified the error.. | C                                                                    |