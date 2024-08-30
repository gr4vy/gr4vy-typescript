# Connection

A configured connection.

## Example Usage

```typescript
import { Connection } from "@gr4vy/sdk/models/components";

let value: Connection = {
    id: "7b5e02bd-fa53-4ef0-b11e-1609d0f48cc5",
    type: "connection",
    name: "My Connection",
    active: true,
    definition: {
        id: "stripe-card",
        type: "connection-definition",
        name: "Stripe",
        count: 1,
        group: "payment-service",
        category: "card",
        iconUrl: "https://cdn.gr4vy.app/stripe.svg",
        provider: "Stripe",
    },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                              | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The ID of the connection.                                                                                                                         | 7b5e02bd-fa53-4ef0-b11e-1609d0f48cc5                                                                                                              |
| `type`                                                                                                                                            | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | `connection`.                                                                                                                                     | connection                                                                                                                                        |
| `name`                                                                                                                                            | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The name of this connection.                                                                                                                      | My Connection                                                                                                                                     |
| `active`                                                                                                                                          | *boolean*                                                                                                                                         | :heavy_minus_sign:                                                                                                                                | Whether this connection is currently in use. Connections can<br/>be deactivated to allow for them to be kept around and<br/>re-activated at a later date. | true                                                                                                                                              |
| `definition`                                                                                                                                      | [components.ConnectionDefinition](../../models/components/connectiondefinition.md)                                                                | :heavy_minus_sign:                                                                                                                                | A connection that can be configured.                                                                                                              |                                                                                                                                                   |