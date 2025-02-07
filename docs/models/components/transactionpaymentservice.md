# TransactionPaymentService

The payment service used for this transaction.

## Example Usage

```typescript
import { TransactionPaymentService } from "@gr4vy/sdk/models/components";

let value: TransactionPaymentService = {
  type: "payment-service",
  id: "824ff064-7f4b-430b-9801-59aff90d013e",
  paymentServiceDefinitionId: "stripe-card",
  method: "card",
  displayName: "Stripe USA",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.TransactionPaymentServiceType](../../models/components/transactionpaymentservicetype.md)     | :heavy_minus_sign:                                                                                       | Always `payment-service`.                                                                                | payment-service                                                                                          |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID for the payment-service.                                                                          | 824ff064-7f4b-430b-9801-59aff90d013e                                                                     |
| `paymentServiceDefinitionId`                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The definition ID of the service used to process this payment.                                           | stripe-card                                                                                              |
| `method`                                                                                                 | [components.TransactionPaymentServiceMethod](../../models/components/transactionpaymentservicemethod.md) | :heavy_check_mark:                                                                                       | The payment method that this service handles.                                                            | card                                                                                                     |
| `displayName`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The display name for the payment service.                                                                | Stripe USA                                                                                               |