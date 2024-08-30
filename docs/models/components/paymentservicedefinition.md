# PaymentServiceDefinition

An available payment service that can be configured.

## Example Usage

```typescript
import { PaymentServiceDefinition } from "@gr4vy/sdk/models/components";

let value: PaymentServiceDefinition = {
    id: "stripe-card",
    type: "payment-service-definition",
    displayName: "Stripe",
    method: "card",
    fields: [
        {
            key: "private_api_key",
            displayName: "Private API key",
            required: true,
            format: "text",
            secret: true,
        },
    ],
    supportedCurrencies: ["USD", "GBP", "EUR"],
    supportedCountries: ["US", "GB", "DE"],
    mode: "card",
    supportedFeatures: {
        delayedCapture: false,
        digitalWallets: false,
        networkTokensDefault: true,
        networkTokensToggle: false,
        openLoop: true,
        openLoopToggle: false,
        partialRefunds: false,
        paymentMethodTokenization: true,
        paymentMethodTokenizationToggle: false,
        refunds: true,
        requiresWebhookSetup: true,
        threeDSecureHosted: true,
        threeDSecurePassThrough: false,
        verifyCredentials: false,
        void: true,
    },
    iconUrl: "https://cdn.gr4vy.app/stripe.svg",
    configuration: {
        approvalUiHeight: "300px",
        approvalUiWidth: "300px",
        approvalUiTarget: "any",
    },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The ID of the payment service. This is the underlying provider followed by a dash followed by the payment method ID. | stripe-card                                                                                                          |
| `type`                                                                                                               | [components.PaymentServiceDefinitionType](../../models/components/paymentservicedefinitiontype.md)                   | :heavy_minus_sign:                                                                                                   | `payment-service-definition`.                                                                                        | payment-service-definition                                                                                           |
| `displayName`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The display name of this service.                                                                                    | Stripe                                                                                                               |
| `method`                                                                                                             | [components.PaymentServiceDefinitionMethod](../../models/components/paymentservicedefinitionmethod.md)               | :heavy_minus_sign:                                                                                                   | The ID of the payment method that this services handles.                                                             | card                                                                                                                 |
| `fields`                                                                                                             | [components.PaymentServiceDefinitionFields](../../models/components/paymentservicedefinitionfields.md)[]             | :heavy_minus_sign:                                                                                                   | A list of fields that need to be submitted when activating the payment. service.                                     |                                                                                                                      |
| `supportedCurrencies`                                                                                                | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | A list of three-letter ISO currency codes that this service supports.                                                | [<br/>"USD",<br/>"GBP",<br/>"EUR"<br/>]                                                                              |
| `supportedCountries`                                                                                                 | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | A list of two-letter ISO country codes that this service supports.                                                   | [<br/>"US",<br/>"GB",<br/>"DE"<br/>]                                                                                 |
| `mode`                                                                                                               | [components.PaymentServiceDefinitionMode](../../models/components/paymentservicedefinitionmode.md)                   | :heavy_minus_sign:                                                                                                   | The mode of this payment service.                                                                                    | card                                                                                                                 |
| `supportedFeatures`                                                                                                  | [components.SupportedFeatures](../../models/components/supportedfeatures.md)                                         | :heavy_minus_sign:                                                                                                   | Features supported by the payment definition.                                                                        |                                                                                                                      |
| `iconUrl`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | An icon to display for the payment service.                                                                          | https://cdn.gr4vy.app/stripe.svg                                                                                     |
| `configuration`                                                                                                      | [components.PaymentServiceDefinitionConfiguration](../../models/components/paymentservicedefinitionconfiguration.md) | :heavy_minus_sign:                                                                                                   | Configuration items for the payment service.                                                                         |                                                                                                                      |