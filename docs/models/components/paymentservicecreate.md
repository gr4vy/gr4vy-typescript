# PaymentServiceCreate

Request body for activating a payment service

## Example Usage

```typescript
import { PaymentServiceCreate } from "@gr4vy/sdk/models/components";

let value: PaymentServiceCreate = {
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
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The display name for the payment service.                                                                                                     | Stripe                                                                                                                                        |
| `paymentServiceDefinitionId`                                                                                                                  | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The definition ID of the service to configure.                                                                                                | stripe-card                                                                                                                                   |
| `fields`                                                                                                                                      | [components.Field](../../models/components/field.md)[]                                                                                        | :heavy_check_mark:                                                                                                                            | The non-secret credential fields that have been configured for this payment service. Any secret fields are omitted.                           |                                                                                                                                               |
| `reportingFields`                                                                                                                             | [components.Field](../../models/components/field.md)[]                                                                                        | :heavy_minus_sign:                                                                                                                            | The non-secret reporting fields that have been configured for this payment service. Any secret fields are omitted.                            |                                                                                                                                               |
| `position`                                                                                                                                    | *number*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Deprecated field used to define the order in which to process payment services                                                                | 1                                                                                                                                             |
| `acceptedCurrencies`                                                                                                                          | *string*[]                                                                                                                                    | :heavy_check_mark:                                                                                                                            | A list of currencies for which this service is enabled, in ISO 4217 three-letter code format.                                                 | [<br/>"USD",<br/>"EUR",<br/>"GBP"<br/>]                                                                                                       |
| `acceptedCountries`                                                                                                                           | *string*[]                                                                                                                                    | :heavy_check_mark:                                                                                                                            | A list of countries for which this service is enabled, in ISO two-letter code format.                                                         | [<br/>"US",<br/>"DE",<br/>"GB"<br/>]                                                                                                          |
| `active`                                                                                                                                      | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Defines if this payment service is currently active.                                                                                          | true                                                                                                                                          |
| `threeDSecureEnabled`                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Defines if this payment service has 3DS enabled.                                                                                              | true                                                                                                                                          |
| `merchantProfile`                                                                                                                             | Record<string, [components.MerchantProfileScheme](../../models/components/merchantprofilescheme.md)>                                          | :heavy_minus_sign:                                                                                                                            | An object containing a key for each supported card schemes, and for each key an object with the 3DS profile for this service for that scheme. |                                                                                                                                               |
| `paymentMethodTokenizationEnabled`                                                                                                            | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Defines if this payment service support payment method tokenization.                                                                          | true                                                                                                                                          |
| `networkTokensEnabled`                                                                                                                        | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Defines if this payment service supports network tokens.                                                                                      | true                                                                                                                                          |
| `openLoop`                                                                                                                                    | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Defines if this payment service is open loop.                                                                                                 | true                                                                                                                                          |
| `settlementReportingEnabled`                                                                                                                  | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Defines if this payment service has settlement reporting enabled.                                                                             | true                                                                                                                                          |