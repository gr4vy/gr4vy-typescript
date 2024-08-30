# TransactionAPaymentService

The payment service used for this transaction.

## Example Usage

```typescript
import { TransactionAPaymentService } from "@gr4vy/sdk/models/components";

let value: TransactionAPaymentService = {
    type: "payment-service",
    id: "stripe-card-faaad066-30b4-4997-a438-242b0752d7e1",
    displayName: "Stripe (Main)",
    method: "card",
    paymentServiceDefinitionId: "stripe-card",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.TransactionPaymentServiceType](../../models/components/transactionpaymentservicetype.md)     | :heavy_minus_sign:                                                                                       | The type of this resource.                                                                               | payment-service                                                                                          |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The ID of this payment service.                                                                          | stripe-card-faaad066-30b4-4997-a438-242b0752d7e1                                                         |
| `displayName`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The custom name set for this service.                                                                    | Stripe (Main)                                                                                            |
| `method`                                                                                                 | [components.TransactionPaymentServiceMethod](../../models/components/transactionpaymentservicemethod.md) | :heavy_minus_sign:                                                                                       | The payment method that this services handles.                                                           | card                                                                                                     |
| `paymentServiceDefinitionId`                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The ID of the payment service definition used to create this service.<br/>                               | stripe-card                                                                                              |