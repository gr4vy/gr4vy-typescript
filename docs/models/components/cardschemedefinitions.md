# CardSchemeDefinitions

A list of available card scheme definitions.

## Example Usage

```typescript
import { CardSchemeDefinitions } from "@gr4vy/sdk/models/components";

let value: CardSchemeDefinitions = {
    items: [
        {
            type: "card-scheme-definition",
            id: "visa",
            iconUrl:
                "https://api.sandbox.example.gr4vy.app/assets/card-scheme-definitions/visa.svg",
            displayName: "Visa",
        },
    ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CardSchemeDefinition](../../models/components/cardschemedefinition.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |