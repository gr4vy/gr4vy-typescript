# CollectionPaymentService

## Example Usage

```typescript
import { CollectionPaymentService } from "@gr4vy/sdk/models/components";

let value: CollectionPaymentService = {
  items: [
    {
      merchantAccountId: "default",
      paymentServiceDefinitionId: "stripe-card",
      method: "thaiqr",
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.PaymentService](../../models/components/paymentservice.md)[] | :heavy_check_mark:                                                       | A list of items returned for this request.                               |                                                                          |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | The number of items for this page.                                       | 20                                                                       |
| `nextCursor`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | The cursor pointing at the next page of items.                           | ZXhhbXBsZTE                                                              |
| `previousCursor`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | The cursor pointing at the previous page of items.                       | Xkjss7asS                                                                |