# GiftCardStoredRequest

The ID of a stored gift card to fetch a balance for.

## Example Usage

```typescript
import { GiftCardStoredRequest } from "@gr4vy/sdk/models/components";

let value: GiftCardStoredRequest = {
  id: "356d56e5-fe16-42ae-97ee-8d55d846ae2e",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | The ID of the field to fetch a balance for. | 356d56e5-fe16-42ae-97ee-8d55d846ae2e        |