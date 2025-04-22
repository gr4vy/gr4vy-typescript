# Error403Active

## Example Usage

```typescript
import { Error403Active } from "@gr4vy/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Always `error`.                                                    | error                                                              |
| `code`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Always `forbidden`                                                 | forbidden                                                          |
| `status`                                                           | *number*                                                           | :heavy_minus_sign:                                                 | Always `403`.                                                      | 403                                                                |
| `message`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | A human readable message that provides more context to the error.  | The resource could not be removed as it is currently active        |
| `details`                                                          | [components.ErrorDetail](../../models/components/errordetail.md)[] | :heavy_minus_sign:                                                 | A list of details that further ellaborate on the error.            |                                                                    |