# ApiLog

A log of an error that happened in the API call.

## Example Usage

```typescript
import { ApiLog } from "@gr4vy/sdk/models/components";

let value: ApiLog = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.ApiLogType](../../models/components/apilogtype.md)                                | :heavy_minus_sign:                                                                            | `api-log`.                                                                                    | api-log                                                                                       |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the API log entry.                                                                  | 8d3fe99b-1422-42e6-bbb3-932d95ae5f79                                                          |
| `requestMethod`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The http request method that generated the log entry.                                         | POST                                                                                          |
| `requestUrl`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The http request URL which trigged the error log.                                             | http://api.wpay.gr4vy.app/transactions                                                        |
| `requestReceivedAt`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time that the request was received.                                              | 2022-01-01T00:00:00+00:00                                                                     |
| `responseStatusCode`                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | The http request status code.                                                                 | 400                                                                                           |
| `responseBody`                                                                                | [components.ResponseBody](../../models/components/responsebody.md)                            | :heavy_minus_sign:                                                                            | The JSON response body for the log entry.                                                     |                                                                                               |
| `responseSentAt`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | date-time of when the response was sent.                                                      | 2022-01-01T00:00:10+00:00                                                                     |