# ApiLogs

A list of API log entries.

## Example Usage

```typescript
import { ApiLogs } from "@gr4vy/sdk/models/components";

let value: ApiLogs = {
    items: [
        {
            type: "api-log",
            id: "8d3fe99b-1422-42e6-bbb3-932d95ae5f79",
            requestMethod: "POST",
            requestUrl: "http://api.wpay.gr4vy.app/transactions",
            requestReceivedAt: new Date("2022-01-01T00:00:00+00:00"),
            responseStatusCode: 400,
            responseBody: {
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
            },
            responseSentAt: new Date("2022-01-01T00:00:10+00:00"),
        },
    ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [components.ApiLog](../../models/components/apilog.md)[] | :heavy_minus_sign:                                       | A list of API log entries.                               |