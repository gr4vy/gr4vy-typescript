# GiftCardServiceDefinitionFields

A single field that needs to be submitted for a payment service when it
is created.

## Example Usage

```typescript
import { GiftCardServiceDefinitionFields } from "@gr4vy/sdk/models/components";

let value: GiftCardServiceDefinitionFields = {
    key: "private_api_key",
    displayName: "Private API key",
    required: true,
    format: "text",
    secret: true,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                     | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The key of a field that needs to be submitted.                                                            | private_api_key                                                                                           |
| `displayName`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The name to display for a field in the dashboard.                                                         | Private API key                                                                                           |
| `required`                                                                                                | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Defines if this field is required when the service is created.                                            | true                                                                                                      |
| `format`                                                                                                  | [components.GiftCardServiceDefinitionFormat](../../models/components/giftcardservicedefinitionformat.md)  | :heavy_minus_sign:                                                                                        | Defines the type of input that needs to be rendered for this field.                                       | text                                                                                                      |
| `secret`                                                                                                  | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Defines if this field is secret. When `true` the field is not<br/>returned when querying the payment service. | true                                                                                                      |