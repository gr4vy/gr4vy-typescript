# PaymentServiceSession

A session request for a payment session. This is an opaque object
passed to the payment service.

## Example Usage

```typescript
import { PaymentServiceSession } from "@gr4vy/sdk/models/components";

let value: PaymentServiceSession = {
    type: "payment-service-session",
    status: "succeeded",
    code: "UNKNOWN_ERROR",
    statusCode: 200,
    responseBody: {
        data: {
            customerType: "EXISTING",
            walletManagementUrl: "https://example.com/session",
        },
        meta: {},
    },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                | [components.PaymentServiceSessionType](../../models/components/paymentservicesessiontype.md)                                          | :heavy_minus_sign:                                                                                                                    | The type of this resource.                                                                                                            | payment-service-session                                                                                                               |
| `status`                                                                                                                              | [components.PaymentServiceSessionStatus](../../models/components/paymentservicesessionstatus.md)                                      | :heavy_minus_sign:                                                                                                                    | The status of the response.<br/><br/>- `succeeded` - The session was successfully generated.<br/>- `failed` - The session could not be generated. | succeeded                                                                                                                             |
| `code`                                                                                                                                | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | A generic error code that may be returned when the session could not be generated.                                                    | UNKNOWN_ERROR                                                                                                                         |
| `statusCode`                                                                                                                          | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The HTTP status code received from the payment service.                                                                               | 200                                                                                                                                   |
| `responseBody`                                                                                                                        | Record<string, *any*>                                                                                                                 | :heavy_minus_sign:                                                                                                                    | The parsed JSON received from the payment service.                                                                                    | {<br/>"data": {<br/>"customerType": "EXISTING",<br/>"walletManagementUrl": "https://example.com/session"<br/>},<br/>"meta": {}<br/>}  |