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
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [components.CollectionPaymentServiceDefinition](../../models/components/collectionpaymentservicedefinition.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |