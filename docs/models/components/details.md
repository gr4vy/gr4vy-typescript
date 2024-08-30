# Details

Details of the log entry, stack trace and endpoint.

## Example Usage

```typescript
import { Details } from "@gr4vy/sdk/models/components";

let value: Details = {
    pointer: "/payment_method/number",
    message: "ensure this value has at least 13 characters",
    location: "body",
    type: "value_error.any_str.min_length",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `pointer`                                               | *string*                                                | :heavy_minus_sign:                                      | Log's pointer.                                          | /payment_method/number                                  |
| `message`                                               | *string*                                                | :heavy_minus_sign:                                      | Detailed message on the log entry.                      | ensure this value has at least 13 characters            |
| `location`                                              | *string*                                                | :heavy_minus_sign:                                      | Location on where the error happened.                   | body                                                    |
| `type`                                                  | *string*                                                | :heavy_minus_sign:                                      | Detailed error type that is specified in the log entry. | value_error.any_str.min_length                          |