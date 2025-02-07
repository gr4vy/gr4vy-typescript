# PayoutsSummaryPaymentService

The payment service used for this payout.

## Example Usage

```typescript
import { PayoutsSummaryPaymentService } from "@gr4vy/sdk/models/components";

let value: PayoutsSummaryPaymentService = {
  type: "payment-service",
  id: "b6c9eb12-2b62-4103-99b9-e3efc94e396d",
  method: "card",
  paymentServiceDefinitionId: "nuvei-card",
  displayName: "Nuvei",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [components.PayoutsSummaryPaymentServiceType](../../models/components/payoutssummarypaymentservicetype.md)     | :heavy_minus_sign:                                                                                             | Always `payment-service`.                                                                                      | payment-service                                                                                                |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The ID for the payout service.                                                                                 | b6c9eb12-2b62-4103-99b9-e3efc94e396d                                                                           |
| `method`                                                                                                       | [components.PayoutsSummaryPaymentServiceMethod](../../models/components/payoutssummarypaymentservicemethod.md) | :heavy_minus_sign:                                                                                             | Always `card`.                                                                                                 | card                                                                                                           |
| `paymentServiceDefinitionId`                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the connection used for this payout.                                                                 | nuvei-card                                                                                                     |
| `displayName`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The display name of the connection used for this payout.                                                       | Nuvei                                                                                                          |