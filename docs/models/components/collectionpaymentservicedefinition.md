# CollectionPaymentServiceDefinition

## Example Usage

```typescript
import { CollectionPaymentServiceDefinition } from "@gr4vy/sdk/models/components";

let value: CollectionPaymentServiceDefinition = {
  items: [
    {
      id: "adyen-ideal",
      displayName: "iDEAL",
      method: "ideal",
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
          format: "timezone",
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
        "GB",
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
        approvalUiHeight: "50vh",
        approvalUiWidth: "50vw",
        cartItemsLimit: 100,
        cartItemsRequired: true,
        cartItemsShouldMatchAmount: true,
      },
    },
  ],
  nextCursor: "ZXhhbXBsZTE",
  previousCursor: "Xkjss7asS",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `items`                                                                                      | [components.PaymentServiceDefinition](../../models/components/paymentservicedefinition.md)[] | :heavy_check_mark:                                                                           | A list of items returned for this request.                                                   |                                                                                              |
| `limit`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | The number of items for this page.                                                           | 20                                                                                           |
| `nextCursor`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | The cursor pointing at the next page of items.                                               | ZXhhbXBsZTE                                                                                  |
| `previousCursor`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | The cursor pointing at the previous page of items.                                           | Xkjss7asS                                                                                    |