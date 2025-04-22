# Error404

## Example Usage

```typescript
import { Error404 } from "@gr4vy/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Always `error`.                                                    | error                                                              |
| `code`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Always `not_found`                                                 | not_found                                                          |
| `status`                                                           | *number*                                                           | :heavy_minus_sign:                                                 | Always `404`.                                                      | 404                                                                |
| `message`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | A human readable message that provides more context to the error.  | The resource could not be found                                    |
| `details`                                                          | [components.ErrorDetail](../../models/components/errordetail.md)[] | :heavy_minus_sign:                                                 | A list of details that further ellaborate on the error.            |                                                                    |