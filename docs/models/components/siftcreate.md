# SiftCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { SiftCreate } from "@gr4vy/sdk/models/components";

let value: SiftCreate = {
    fields: [
        {
            key: "<key>",
            value: "",
        },
    ],
    displayName: "Gabe77",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                   | [components.ApiRoutersAntiFraudServicesSchemasField](../../models/components/apiroutersantifraudservicesschemasfield.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `antiFraudServiceDefinitionId`                                                                                             | [components.SiftCreateAntiFraudServiceDefinitionId](../../models/components/siftcreateantifraudservicedefinitionid.md)     | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `displayName`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `active`                                                                                                                   | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `reviewsEnabled`                                                                                                           | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |