# NetworkTokenCryptogramProvisionFailedContext

Additional context for this event.

## Example Usage

```typescript
import { NetworkTokenCryptogramProvisionFailedContext } from "@gr4vy/sdk/models/components";

let value: NetworkTokenCryptogramProvisionFailedContext = {
    reason: "Network Error",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `url`                                                                  | *string*                                                               | :heavy_minus_sign:                                                     | The endpoint for the request, if performed.                            |                                                                        |
| `request`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | The HTTP body sent to the Network Token provider, if performed.        |                                                                        |
| `response`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | The HTTP body received from the Network Token provider, if any.        |                                                                        |
| `responseStatusCode`                                                   | *number*                                                               | :heavy_minus_sign:                                                     | The HTTP response status code from the Network Token provider, if any. |                                                                        |
| `reason`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | The reason we could not provision the cryptogram.                      | Network Error                                                          |