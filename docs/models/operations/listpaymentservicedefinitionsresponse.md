# ListPaymentServiceDefinitionsResponse

## Example Usage

```typescript
import { ListPaymentServiceDefinitionsResponse } from "@gr4vy/sdk/models/operations";

let value: ListPaymentServiceDefinitionsResponse = {
  result: {
    items: [
      {
        id: "stripe-card",
        displayName: "Stripe",
        method: "paymaya",
        fields: [
          {
            key: "private_api_key",
            displayName: "Private API key",
            required: true,
            format: "timezone",
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
          "AUD",
        ],
        mode: "card",
        iconUrl: "https://example.com/icons/adyen-ideal.svg",
        supportedFeatures: {
          "key": false,
        },
        requiredCheckoutFields: [
          {
            requiredFields: [
              "address.line1",
              "address.country",
              "address.city",
              "address.postal_code",
            ],
            conditions: {
              "country": [
                "IN",
              ],
            },
          },
        ],
        configuration: {
          approvalUiTarget: "any",
          approvalUiHeight: "100px",
          approvalUiWidth: "50vw",
          cartItemsLimit: 100,
          cartItemsRequired: true,
          cartItemsShouldMatchAmount: true,
        },
      },
    ],
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: "Xkjss7asS",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [components.CollectionPaymentServiceDefinition](../../models/components/collectionpaymentservicedefinition.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |