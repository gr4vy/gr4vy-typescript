# CardSchemeDefinition

Definitions of a card scheme including icon, label, etc.

## Example Usage

```typescript
import { CardSchemeDefinition } from "@gr4vy/sdk/models/components";

let value: CardSchemeDefinition = {
    type: "card-scheme-definition",
    id: "visa",
    iconUrl: "https://api.sandbox.example.gr4vy.app/assets/card-scheme-definitions/visa.svg",
    displayName: "Visa",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [components.CardSchemeDefinitionType](../../models/components/cardschemedefinitiontype.md) | :heavy_minus_sign:                                                                         | `card-scheme-definition`.                                                                  | card-scheme-definition                                                                     |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | The name of this card scheme.                                                              | visa                                                                                       |
| `iconUrl`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | The icon for this card scheme.                                                             | https://api.sandbox.example.gr4vy.app/assets/card-scheme-definitions/visa.svg              |
| `displayName`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | The display name of this card scheme.                                                      | Visa                                                                                       |