# AntiFraudServiceDefinition

An available anti fraud service that can be configured.

## Example Usage

```typescript
import { AntiFraudServiceDefinition } from "@gr4vy/sdk/models/components";

let value: AntiFraudServiceDefinition = {
    id: "sift-anti-fraud",
    type: "anti-fraud-service-definition",
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The ID of the anti fraud service definition.                                                                 | sift-anti-fraud                                                                                              |
| `type`                                                                                                       | [components.AntiFraudServiceDefinitionType](../../models/components/antifraudservicedefinitiontype.md)       | :heavy_minus_sign:                                                                                           | `anti-fraud-service-definition`.                                                                             | anti-fraud-service-definition                                                                                |
| `displayName`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The display name of this service.                                                                            | Stripe                                                                                                       |
| `fields`                                                                                                     | [components.AntiFraudServiceDefinitionFields](../../models/components/antifraudservicedefinitionfields.md)[] | :heavy_minus_sign:                                                                                           | A list of fields that need to be submitted when activating the payment. service.                             |                                                                                                              |
| `iconUrl`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | An icon to display for the payment service.                                                                  | https://cdn.gr4vy.app/stripe.svg                                                                             |