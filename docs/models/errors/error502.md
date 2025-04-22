# Error502

## Example Usage

```typescript
import { Error502 } from "@gr4vy/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Always `error`.                                                    | error                                                              |
| `code`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Always `bad_gateway`                                               | bad_gateway                                                        |
| `status`                                                           | *number*                                                           | :heavy_minus_sign:                                                 | Always `502`.                                                      | 502                                                                |
| `message`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | A human readable message that provides more context to the error.  | Request could not be processed                                     |
| `details`                                                          | [components.ErrorDetail](../../models/components/errordetail.md)[] | :heavy_minus_sign:                                                 | A list of details that further ellaborate on the error.            |                                                                    |