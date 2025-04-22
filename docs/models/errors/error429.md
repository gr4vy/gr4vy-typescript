# Error429

## Example Usage

```typescript
import { Error429 } from "@gr4vy/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Always `error`.                                                    | error                                                              |
| `code`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Always `too_many_requests`                                         | too_many_requests                                                  |
| `status`                                                           | *number*                                                           | :heavy_minus_sign:                                                 | Always `429`.                                                      | 429                                                                |
| `message`                                                          | *string*                                                           | :heavy_check_mark:                                                 | A human readable message that provides more context to the error.  | Request failed validation                                          |
| `details`                                                          | [components.ErrorDetail](../../models/components/errordetail.md)[] | :heavy_minus_sign:                                                 | A list of details that further ellaborate on the error.            |                                                                    |