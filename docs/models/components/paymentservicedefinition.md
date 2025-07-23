# PaymentServiceDefinition

## Example Usage

```typescript
import { PaymentServiceDefinition } from "@gr4vy/sdk/models/components";

let value: PaymentServiceDefinition = {
  id: "adyen-ideal",
  displayName: "iDEAL",
  method: "pse",
  fields: [
    {
      key: "private_api_key",
      displayName: "Private API key",
      required: true,
      format: "boolean",
      secret: true,
    },
  ],
  reportingFields: [
    {
      key: "private_api_key",
      displayName: "Private API key",
      required: true,
      format: "boolean",
      secret: true,
    },
  ],
  supportedCurrencies: [
    "USD",
    "GBP",
    "EUR",
    "AUD",
  ],
  supportedCountries: [
    "US",
  ],
  mode: "card",
  supportedFeatures: {
    "key": false,
    "key1": true,
  },
  requiredCheckoutFields: [
    {
      requiredFields: [
        "address.line1",
        "address.country",
        "address.city",
        "address.postal_code",
      ],
    },
  ],
  configuration: {
    approvalUiTarget: "any",
    approvalUiHeight: "100px",
    approvalUiWidth: "100px",
    cartItemsLimit: 100,
    cartItemsRequired: true,
    cartItemsShouldMatchAmount: true,
  },
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 | Example                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                        | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | The definition ID of the payment service that can be configured. This is the underlying provider followed by a dash followed by the method. | adyen-ideal                                                                                                                                 |
| `type`                                                                                                                                      | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Always `payment-service-definition`.                                                                                                        | payment-service-definition                                                                                                                  |
| `displayName`                                                                                                                               | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | A human friendly name for this service.                                                                                                     | iDEAL                                                                                                                                       |
| `method`                                                                                                                                    | [components.Method](../../models/components/method.md)                                                                                      | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |
| `fields`                                                                                                                                    | [components.DefinitionField](../../models/components/definitionfield.md)[]                                                                  | :heavy_check_mark:                                                                                                                          | A list of credentials and related fields which can be configured for this service.                                                          |                                                                                                                                             |
| `reportingFields`                                                                                                                           | [components.DefinitionField](../../models/components/definitionfield.md)[]                                                                  | :heavy_check_mark:                                                                                                                          | A list of reporting fields which can be configured for this service.                                                                        |                                                                                                                                             |
| `supportedCurrencies`                                                                                                                       | *string*[]                                                                                                                                  | :heavy_check_mark:                                                                                                                          | A list of three-letter ISO currency codes that this service supports.                                                                       | [<br/>"USD",<br/>"GBP",<br/>"EUR",<br/>"AUD"<br/>]                                                                                          |
| `supportedCountries`                                                                                                                        | *string*[]                                                                                                                                  | :heavy_check_mark:                                                                                                                          | A list of two-letter ISO country codes that this service supports.                                                                          | US                                                                                                                                          |
| `mode`                                                                                                                                      | [components.Mode](../../models/components/mode.md)                                                                                          | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         | card                                                                                                                                        |
| `iconUrl`                                                                                                                                   | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | An icon to display for the payment service.                                                                                                 | https://example.com/icons/adyen-ideal.svg                                                                                                   |
| `supportedFeatures`                                                                                                                         | Record<string, *boolean*>                                                                                                                   | :heavy_check_mark:                                                                                                                          | Features supported by the payment service.                                                                                                  |                                                                                                                                             |
| `requiredCheckoutFields`                                                                                                                    | [components.RequiredCheckoutFields](../../models/components/requiredcheckoutfields.md)[]                                                    | :heavy_check_mark:                                                                                                                          | A list of condition that define when some fields must be provided with a transaction request.                                               |                                                                                                                                             |
| `configuration`                                                                                                                             | [components.PaymentServiceConfiguration](../../models/components/paymentserviceconfiguration.md)                                            | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |                                                                                                                                             |