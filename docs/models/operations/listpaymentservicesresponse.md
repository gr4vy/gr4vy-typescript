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
        threeDSecureEnabled: true,
        merchantProfile: {
          "key": {
            merchantAcquirerBin: "516327",
            merchantUrl: "https://example.com",
            merchantAcquirerId: "123456789012345",
            merchantName: "Acme Inc.",
            merchantCountryCode: "USD",
            merchantCategoryCode: "1234",
            createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
          },
        },
        fields: [
          {
            key: "api_key",
            value: "key-12345",
          },
        ],
        reportingFields: [
          {
            key: "api_key",
            value: "key-12345",
          },
        ],
        createdAt: new Date("2013-07-16T19:23:00.000+00:00"),
        updatedAt: new Date("2013-07-16T19:23:00.000+00:00"),
      },
    ],
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: "Xkjss7asS",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.CollectionPaymentService](../../models/components/collectionpaymentservice.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |