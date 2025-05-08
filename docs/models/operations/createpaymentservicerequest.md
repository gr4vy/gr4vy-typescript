# CreatePaymentServiceRequest

## Example Usage

```typescript
import { CreatePaymentServiceRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentServiceRequest = {
  paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
  paymentServiceUpdate: {
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
    active: true,
    threeDSecureEnabled: true,
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `paymentServiceId`                                                                 | *string*                                                                           | :heavy_check_mark:                                                                 | the ID of the payment service                                                      | fffd152a-9532-4087-9a4f-de58754210f0                                               |
| `merchantAccountId`                                                                | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of the merchant account to use for this request.                            |                                                                                    |
| `paymentServiceUpdate`                                                             | [components.PaymentServiceUpdate](../../models/components/paymentserviceupdate.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |