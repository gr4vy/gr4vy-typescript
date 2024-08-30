# GiftCardServiceDefinition

An available gift card service that can be configured.

## Example Usage

```typescript
import { GiftCardServiceDefinition } from "@gr4vy/sdk/models/components";

let value: GiftCardServiceDefinition = {
    id: "qwikcilver-gift-card",
    type: "gift-card-service-definition",
    displayName: "Stripe",
    fields: [
        {
            key: "private_api_key",
            displayName: "Private API key",
            required: true,
            format: "text",
            secret: true,
        },
    ],
    iconUrl: "https://cdn.gr4vy.app/stripe.svg",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The ID of the gift card service definition.                                                                | qwikcilver-gift-card                                                                                       |
| `type`                                                                                                     | [components.GiftCardServiceDefinitionType](../../models/components/giftcardservicedefinitiontype.md)       | :heavy_minus_sign:                                                                                         | `gift-card-service-definition`.                                                                            | gift-card-service-definition                                                                               |
| `displayName`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The display name of this service.                                                                          | Stripe                                                                                                     |
| `fields`                                                                                                   | [components.GiftCardServiceDefinitionFields](../../models/components/giftcardservicedefinitionfields.md)[] | :heavy_minus_sign:                                                                                         | A list of fields that need to be submitted when activating the payment. service.                           |                                                                                                            |
| `iconUrl`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | An icon to display for the payment service.                                                                | https://cdn.gr4vy.app/stripe.svg                                                                           |