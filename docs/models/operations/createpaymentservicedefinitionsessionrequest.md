# CreatePaymentServiceDefinitionSessionRequest

## Example Usage

```typescript
import { CreatePaymentServiceDefinitionSessionRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentServiceDefinitionSessionRequest = {
    paymentServiceDefinitionId: "stripe-card",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `paymentServiceDefinitionId`                     | *string*                                         | :heavy_check_mark:                               | The unique ID of the payment service definition. | stripe-card                                      |
| `requestBody`                                    | Record<string, *any*>                            | :heavy_minus_sign:                               | N/A                                              |                                                  |