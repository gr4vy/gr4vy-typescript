# ListPaymentServiceDefinitionsResponse

## Example Usage

```typescript
import { ListPaymentServiceDefinitionsResponse } from "@gr4vy/sdk/models/operations";

let value: ListPaymentServiceDefinitionsResponse = {
  result: {
    items: [
      {
        id: "adyen-ideal",
        displayName: "iDEAL",
        method: "oney_6x",
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
          "key2": false,
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
        supportedIntegrationClients: [
          "redirect",
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.PaymentServiceDefinitions](../../models/components/paymentservicedefinitions.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |