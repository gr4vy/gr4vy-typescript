# ThreeDSecureRequestErrorEventContext

3DS post-authentication context.

## Example Usage

```typescript
import { ThreeDSecureRequestErrorEventContext } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureRequestErrorEventContext = {
    url: "https://3dserver.example/auth",
    reason: "TIMEOUT",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `url`                                     | *string*                                  | :heavy_minus_sign:                        | The URL that was called for this request. | https://3dserver.example/auth             |
| `reason`                                  | *string*                                  | :heavy_minus_sign:                        | The reason for the error.                 | TIMEOUT                                   |