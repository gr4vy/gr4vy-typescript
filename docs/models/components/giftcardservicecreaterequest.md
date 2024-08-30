# GiftCardServiceCreateRequest

Request body for activating a gift card service.

## Example Usage

```typescript
import { GiftCardServiceCreateRequest } from "@gr4vy/sdk/models/components";

let value: GiftCardServiceCreateRequest = {
    giftCardServiceDefinitionId: "qwikcilver-gift-card",
    displayName: "Qwikcilver UK",
    fields: [
        {
            key: "private_key",
            value: "pk_26PHem9AhJZvU623DfE1x4sd",
        },
    ],
    active: true,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `giftCardServiceDefinitionId`                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the gift card service to use.                                                                                 | qwikcilver-gift-card                                                                                                    |
| `displayName`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | A custom name for the service. This will be shown in the Admin UI.                                                      | Qwikcilver UK                                                                                                           |
| `fields`                                                                                                                | [components.GiftCardServiceCreateRequestFields](../../models/components/giftcardservicecreaterequestfields.md)[]        | :heavy_check_mark:                                                                                                      | A list of fields, each containing a key-value pair for each field defined<br/>by the definition for this gift card service. |                                                                                                                         |
| `active`                                                                                                                | *boolean*                                                                                                               | :heavy_minus_sign:                                                                                                      | Defines if this service is currently active or not.                                                                     | true                                                                                                                    |