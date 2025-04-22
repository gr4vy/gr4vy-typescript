# Error405

## Example Usage

```typescript
import { Error405 } from "@gr4vy/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Always `error`.                                                    | error                                                              |
| `code`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Always `method_not_allowed`                                        | method_not_allowed                                                 |
| `status`                                                           | *number*                                                           | :heavy_minus_sign:                                                 | Always `405`.                                                      | 405                                                                |
| `message`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | A human readable message that provides more context to the error.  | Method Not Allowed                                                 |
| `details`                                                          | [components.ErrorDetail](../../models/components/errordetail.md)[] | :heavy_minus_sign:                                                 | A list of details that further ellaborate on the error.            |                                                                    |