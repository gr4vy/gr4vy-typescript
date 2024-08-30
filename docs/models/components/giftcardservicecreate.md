# GiftCardServiceCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { GiftCardServiceCreate } from "@gr4vy/sdk/models/components";

let value: GiftCardServiceCreate = {
    giftCardServiceDefinitionId: "qwikcilver-gift-card",
    displayName: "Johnathan.Cronin",
    fields: [
        {
            key: "<key>",
            value: "<value>",
        },
    ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `giftCardServiceDefinitionId`                                                                                            | [components.GiftCardServiceProvider](../../models/components/giftcardserviceprovider.md)                                 | :heavy_check_mark:                                                                                                       | An enumeration.                                                                                                          |
| `displayName`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `active`                                                                                                                 | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `fields`                                                                                                                 | [components.ApiRoutersGiftCardServicesSchemasField](../../models/components/apiroutersgiftcardservicesschemasfield.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |