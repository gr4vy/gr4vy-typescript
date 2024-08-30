# ForterCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { ForterCreate } from "@gr4vy/sdk/models/components";

let value: ForterCreate = {
    fields: [
        {
            key: "<key>",
            value: "<value>",
        },
    ],
    displayName: "Tiana_Bayer49",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                   | [components.ApiRoutersAntiFraudServicesSchemasField](../../models/components/apiroutersantifraudservicesschemasfield.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `antiFraudServiceDefinitionId`                                                                                             | [components.ForterCreateAntiFraudServiceDefinitionId](../../models/components/fortercreateantifraudservicedefinitionid.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `displayName`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `active`                                                                                                                   | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `reviewsEnabled`                                                                                                           | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |