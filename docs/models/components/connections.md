# Connections

A list of configured connections.

## Example Usage

```typescript
import { Connections } from "@gr4vy/sdk/models/components";

let value: Connections = {
    items: [
        {
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
        },
    ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Connection](../../models/components/connection.md)[] | :heavy_minus_sign:                                               | N/A                                                              |