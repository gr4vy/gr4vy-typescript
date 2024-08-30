# PaymentConnectorResponseTransactionVoidFailedEventContext

Additional context for this event.

## Example Usage

```typescript
import { PaymentConnectorResponseTransactionVoidFailedEventContext } from "@gr4vy/sdk/models/components";

let value: PaymentConnectorResponseTransactionVoidFailedEventContext = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `paymentServiceId`                            | *string*                                      | :heavy_minus_sign:                            | The unique ID of the payment service used.    |
| `paymentServiceDisplayName`                   | *string*                                      | :heavy_minus_sign:                            | The display name of the payment service used. |
| `paymentServiceDefinitionId`                  | *string*                                      | :heavy_minus_sign:                            | The payment service definition used.          |