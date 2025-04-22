# CollectionNoCursorCardSchemeDefinition

## Example Usage

```typescript
import { CollectionNoCursorCardSchemeDefinition } from "@gr4vy/sdk/models/components";

let value: CollectionNoCursorCardSchemeDefinition = {
  items: [
    {
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
| `items`                                                                              | [components.CardSchemeDefinition](../../models/components/cardschemedefinition.md)[] | :heavy_check_mark:                                                                   | A list of items returned for this request.                                           |