# PaymentServices

A list of active, configured payment services.

## Example Usage

```typescript
import { PaymentServices } from "@gr4vy/sdk/models/components";

let value: PaymentServices = {
    items: [
        {
            type: "payment-service",
            id: "faaad066-30b4-4997-a438-242b0752d7e1",
            acceptedCountries: ["DE"],
            acceptedCurrencies: ["EUR"],
            active: true,
            createdAt: new Date("2012-12-12T10:53:43+00:00"),
            displayName: "Stripe (Main)",
            fields: [
                {
                    key: "secret_key",
                    value: "sk_test_26PHem9AhJZvU623DfE1x4sd",
                },
            ],
            merchantAccountId: "default",
            merchantProfile: {
                amex: {
                    createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
                },
                dankort: {
                    createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
                },
                discover: {
                    createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
                },
                jcb: {
                    createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
                },
                mastercard: {
                    createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
                },
                unionpay: {
                    createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
                },
                visa: {
                    createdAt: new Date("2023-07-26T19:23:00.000+00:00"),
                },
            },
            method: "card",
            networkTokensEnabled: true,
            openLoop: true,
            paymentMethodTokenizationEnabled: true,
            paymentServiceDefinitionId: "stripe-card",
            threeDSecureEnabled: true,
            updatedAt: new Date("2012-12-12T10:53:43+00:00"),
            webhookUrl: "https://api.example.app.gr4vy.com/i/ViYUjDkUSoiQ0ColeigGwnN0...",
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
| `items`                                                                                                            | [components.PaymentService](../../models/components/paymentservice.md)[]                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |