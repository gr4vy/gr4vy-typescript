# PaymentConnectorResponseTransactionVoidDeclinedEventContext

Additional context for this event.

## Example Usage

```typescript
import { PaymentConnectorResponseTransactionVoidDeclinedEventContext } from "@gr4vy/sdk/models/components";

let value: PaymentConnectorResponseTransactionVoidDeclinedEventContext = {
    paymentServiceTransactionId: "transaction-1234",
    code: "INVALID DATA",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `paymentServiceId`                                                | *string*                                                          | :heavy_minus_sign:                                                | The unique ID of the payment service used.                        |                                                                   |
| `paymentServiceDisplayName`                                       | *string*                                                          | :heavy_minus_sign:                                                | The display name of the payment service used.                     |                                                                   |
| `paymentServiceDefinitionId`                                      | *string*                                                          | :heavy_minus_sign:                                                | The payment service definition used.                              |                                                                   |
| `paymentServiceTransactionId`                                     | *string*                                                          | :heavy_minus_sign:                                                | The external ID of the transaction as set by the payment service. | transaction-1234                                                  |
| `code`                                                            | *string*                                                          | :heavy_minus_sign:                                                | A raw response code returned for the failure.                     | INVALID DATA                                                      |