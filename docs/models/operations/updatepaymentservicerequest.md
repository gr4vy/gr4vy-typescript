# UpdatePaymentServiceRequest

## Example Usage

```typescript
import { UpdatePaymentServiceRequest } from "@gr4vy/sdk/models/operations";

let value: UpdatePaymentServiceRequest = {
  paymentServiceCreate: {
    displayName: "Stripe",
    paymentServiceDefinitionId: "stripe-card",
    fields: [],
    acceptedCurrencies: [
      "USD",
      "EUR",
      "GBP",
    ],
    acceptedCountries: [
      "US",
      "DE",
      "GB",
    ],
    threeDSecureEnabled: true,
    settlementReportingEnabled: true,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `merchantAccountId`                                                                | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of the merchant account to use for this request.                            |
| `paymentServiceCreate`                                                             | [components.PaymentServiceCreate](../../models/components/paymentservicecreate.md) | :heavy_check_mark:                                                                 | N/A                                                                                |