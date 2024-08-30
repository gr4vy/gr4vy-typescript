# KountCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { KountCreate } from "@gr4vy/sdk/models/components";

let value: KountCreate = {
    fields: [
        {
            key: "<key>",
            value: "<value>",
        },
    ],
    displayName: "Janessa.Leannon48",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                   | [components.ApiRoutersAntiFraudServicesSchemasField](../../models/components/apiroutersantifraudservicesschemasfield.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `antiFraudServiceDefinitionId`                                                                                             | [components.KountCreateAntiFraudServiceDefinitionId](../../models/components/kountcreateantifraudservicedefinitionid.md)   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `displayName`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `active`                                                                                                                   | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `reviewsEnabled`                                                                                                           | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |