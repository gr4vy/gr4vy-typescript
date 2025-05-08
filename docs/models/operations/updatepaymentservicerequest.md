# UpdatePaymentServiceRequest

## Example Usage

```typescript
import { UpdatePaymentServiceRequest } from "@gr4vy/sdk/models/operations";

let value: UpdatePaymentServiceRequest = {
  paymentServiceCreate: {
    displayName: "Stripe",
    paymentServiceDefinitionId: "stripe-card",
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
    active: true,
    merchantProfile: {
      "key": {
        merchantAcquirerBin: "516327",
        merchantUrl: "https://example.com",
        merchantAcquirerId: "123456789012345",
        merchantName: "Acme Inc.",
        merchantCountryCode: "USD",
        merchantCategoryCode: "1234",
      },
    },
    paymentMethodTokenizationEnabled: true,
    networkTokensEnabled: true,
    openLoop: true,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `merchantAccountId`                                                                | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of the merchant account to use for this request.                            |
| `paymentServiceCreate`                                                             | [components.PaymentServiceCreate](../../models/components/paymentservicecreate.md) | :heavy_check_mark:                                                                 | N/A                                                                                |