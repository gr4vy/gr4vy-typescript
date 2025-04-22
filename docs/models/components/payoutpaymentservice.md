# PayoutPaymentService

## Example Usage

```typescript
import { PayoutPaymentService } from "@gr4vy/sdk/models/components";

let value: PayoutPaymentService = {
  id: "b6c9eb12-2b62-4103-99b9-e3efc94e396d",
  paymentServiceDefinitionId: "nuvei-card",
  displayName: "Nuvei",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_minus_sign:                                       | Always `payment-service`.                                | payment-service                                          |
| `id`                                                     | *string*                                                 | :heavy_minus_sign:                                       | The ID for the payout service.                           | b6c9eb12-2b62-4103-99b9-e3efc94e396d                     |
| `method`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Always `card`.                                           | card                                                     |
| `paymentServiceDefinitionId`                             | *string*                                                 | :heavy_check_mark:                                       | The ID of the connection used for this payout.           | nuvei-card                                               |
| `displayName`                                            | *string*                                                 | :heavy_minus_sign:                                       | The display name of the connection used for this payout. | Nuvei                                                    |