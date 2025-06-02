# ListPaymentServicesResponse

## Example Usage

```typescript
import { ListPaymentServicesResponse } from "@gr4vy/sdk/models/operations";

let value: ListPaymentServicesResponse = {
  result: {
    items: [
      {
        merchantAccountId: "default",
        paymentServiceDefinitionId: "stripe-card",
        method: "dana",
        displayName: "Stripe",
        position: 1,
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
        paymentMethodTokenizationEnabled: true,
        networkTokensEnabled: true,
        openLoop: true,
        settlementReportingEnabled: true,
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.CollectionPaymentService](../../models/components/collectionpaymentservice.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |