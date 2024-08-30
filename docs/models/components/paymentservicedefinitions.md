# PaymentServiceDefinitions

A list of available payment services definitions.

## Example Usage

```typescript
import { PaymentServiceDefinitions } from "@gr4vy/sdk/models/components";

let value: PaymentServiceDefinitions = {
    items: [
        {
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
        },
    ],
    limit: 1,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: null,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                            | [components.PaymentServiceDefinition](../../models/components/paymentservicedefinition.md)[]                       | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |