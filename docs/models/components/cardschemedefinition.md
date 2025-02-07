# CardSchemeDefinition

Base model with JSON encoders.

## Example Usage

```typescript
import { CardSchemeDefinition } from "@gr4vy/sdk/models/components";

let value: CardSchemeDefinition = {
  type: "card-scheme-definition",
  id: "visa",
  iconUrl:
    "https://api.sandbox.example.gr4vy.app/assets/card-scheme-definitions/visa.svg",
  displayName: "Visa",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [components.CardSchemeDefinitionType](../../models/components/cardschemedefinitiontype.md) | :heavy_minus_sign:                                                                         | Always `card-scheme-definition`.                                                           | card-scheme-definition                                                                     |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID for the card scheme.                                                                | visa                                                                                       |
| `iconUrl`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | The icon for this card scheme.                                                             | https://api.sandbox.example.gr4vy.app/assets/card-scheme-definitions/visa.svg              |
| `displayName`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | The display name of this card scheme.                                                      | Visa                                                                                       |