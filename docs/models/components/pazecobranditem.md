# PazeCobrandItem

## Example Usage

```typescript
import { PazeCobrandItem } from "@gr4vy/sdk/models/components";

let value: PazeCobrandItem = {
  name: "Travel Rewards",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `name`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | Product name of the cobrand card. Must match exactly with the card name from the network. | Travel Rewards                                                                            |
| `benefitsOffered`                                                                         | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Whether benefits are offered for this cobrand card.                                       |                                                                                           |