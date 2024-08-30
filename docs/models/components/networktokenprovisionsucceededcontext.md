# NetworkTokenProvisionSucceededContext

Additional context for this event.

## Example Usage

```typescript
import { NetworkTokenProvisionSucceededContext } from "@gr4vy/sdk/models/components";

let value: NetworkTokenProvisionSucceededContext = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `url`                                                          | *string*                                                       | :heavy_minus_sign:                                             | The endpoint for the request.                                  |
| `request`                                                      | *string*                                                       | :heavy_minus_sign:                                             | The HTTP body sent to the Network Token provider.              |
| `response`                                                     | *string*                                                       | :heavy_minus_sign:                                             | The HTTP body received from the Network Token provider.        |
| `responseStatusCode`                                           | *number*                                                       | :heavy_minus_sign:                                             | The HTTP response status code from the Network Token provider. |