# SimulatorCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { SimulatorCreate } from "@gr4vy/sdk/models/components";

let value: SimulatorCreate = {
    fields: [
        {
            key: "<key>",
            value: "<value>",
        },
    ],
    displayName: "Maurice43",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                         | [components.ApiRoutersAntiFraudServicesSchemasField](../../models/components/apiroutersantifraudservicesschemasfield.md)[]       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `antiFraudServiceDefinitionId`                                                                                                   | [components.SimulatorCreateAntiFraudServiceDefinitionId](../../models/components/simulatorcreateantifraudservicedefinitionid.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `displayName`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `active`                                                                                                                         | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `reviewsEnabled`                                                                                                                 | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |