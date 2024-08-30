# PaymentConnectorExternalTransactionRequestContext

Additional context for the transaction.

## Example Usage

```typescript
import { PaymentConnectorExternalTransactionRequestContext } from "@gr4vy/sdk/models/components";

let value: PaymentConnectorExternalTransactionRequestContext = {
    connectorRequestId: "76f5ed52-8675-491f-b52d-731ca894ed80",
    request: "",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `connectorRequestId`                                  | *string*                                              | :heavy_minus_sign:                                    | The connector request id.                             | 76f5ed52-8675-491f-b52d-731ca894ed80                  |
| `request`                                             | *string*                                              | :heavy_minus_sign:                                    | The request.                                          |                                                       |
| `response`                                            | *string*                                              | :heavy_minus_sign:                                    | The response.                                         |                                                       |
| `paymentServiceDefinitionId`                          | *string*                                              | :heavy_minus_sign:                                    | The payment service definition id.                    |                                                       |
| `success`                                             | *boolean*                                             | :heavy_minus_sign:                                    | Whether the transaction was successful.               |                                                       |
| `paymentServiceId`                                    | *string*                                              | :heavy_minus_sign:                                    | The payment service id.                               |                                                       |
| `responseStatusCode`                                  | *string*                                              | :heavy_minus_sign:                                    | The response status code.                             |                                                       |
| `paymentServiceDisplayName`                           | *string*                                              | :heavy_minus_sign:                                    | The payment service display name.                     |                                                       |
| `method`                                              | *string*                                              | :heavy_minus_sign:                                    | The HTTP method.                                      |                                                       |
| `url`                                                 | *string*                                              | :heavy_minus_sign:                                    | The endpoint for the request.                         |                                                       |
| `refundId`                                            | *string*                                              | :heavy_minus_sign:                                    | The ID of the refund, in case this links to a refund. |                                                       |
| `refundXid`                                           | *string*                                              | :heavy_minus_sign:                                    | The external ID of the refund.                        |                                                       |