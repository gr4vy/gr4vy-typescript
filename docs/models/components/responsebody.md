# ResponseBody

The JSON response body for the log entry.

## Example Usage

```typescript
import { ResponseBody } from "@gr4vy/sdk/models/components";

let value: ResponseBody = {
    code: "bad_request",
    message: "Request failed validation",
    status: 400,
    type: "error",
    details: {
        pointer: "/payment_method/number",
        message: "ensure this value has at least 13 characters",
        location: "body",
        type: "value_error.any_str.min_length",
    },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `code`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The error code.                                          | bad_request                                              |
| `message`                                                | *string*                                                 | :heavy_minus_sign:                                       | The error message.                                       | Request failed validation                                |
| `status`                                                 | *number*                                                 | :heavy_minus_sign:                                       | The HTTP error code.                                     | 400                                                      |
| `type`                                                   | *string*                                                 | :heavy_minus_sign:                                       | Type of the log entry.                                   | error                                                    |
| `details`                                                | [components.Details](../../models/components/details.md) | :heavy_minus_sign:                                       | Details of the log entry, stack trace and endpoint.      |                                                          |