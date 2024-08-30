# ConnectionDefinitions

A list of available connection definitions.

## Example Usage

```typescript
import { ConnectionDefinitions } from "@gr4vy/sdk/models/components";

let value: ConnectionDefinitions = {
    items: [
        {
            id: "stripe-card",
            type: "connection-definition",
            name: "Stripe",
            count: 1,
            group: "payment-service",
            category: "card",
            iconUrl: "https://cdn.gr4vy.app/stripe.svg",
            provider: "Stripe",
        },
    ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ConnectionDefinition](../../models/components/connectiondefinition.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |