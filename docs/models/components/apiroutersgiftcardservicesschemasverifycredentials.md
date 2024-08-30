# ApiRoutersGiftCardServicesSchemasVerifyCredentials

Base model with JSON encoders.

## Example Usage

```typescript
import { ApiRoutersGiftCardServicesSchemasVerifyCredentials } from "@gr4vy/sdk/models/components";

let value: ApiRoutersGiftCardServicesSchemasVerifyCredentials = {
    giftCardServiceDefinitionId: "qwikcilver-gift-card",
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
| `giftCardServiceId`                                                                                                      | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `fields`                                                                                                                 | [components.ApiRoutersGiftCardServicesSchemasField](../../models/components/apiroutersgiftcardservicesschemasfield.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |