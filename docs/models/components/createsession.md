# CreateSession

The session data received from the payment service.

## Example Usage

```typescript
import { CreateSession } from "@gr4vy/sdk/models/components";

let value: CreateSession = {
  status: "succeeded",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | *"payment-service-session"*                                                        | :heavy_minus_sign:                                                                 | Always `payment-service-session`.                                                  | payment-service-session                                                            |
| `status`                                                                           | [components.CreateSessionStatus](../../models/components/createsessionstatus.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `code`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | A generic error code that may be returned when the session could not be generated. | UNKNOWN_ERROR                                                                      |
| `statusCode`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | The HTTP status code received from the payment service.                            | 201                                                                                |
| `responseBody`                                                                     | Record<string, *any*>                                                              | :heavy_minus_sign:                                                                 | The JSON response body received from the payment service.                          | {<br/>"sessionId": "12345"<br/>}                                                   |