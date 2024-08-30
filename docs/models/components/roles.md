# Roles

A list of roles.

## Example Usage

```typescript
import { Roles } from "@gr4vy/sdk/models/components";

let value: Roles = {
    items: [
        {
            type: "role",
            id: "462ab2e2-3e29-44bd-b39f-e4d1293affbb",
            name: "Support",
            description: "Customer support agents",
            permissions: {
                allow: ["buyers.read", "payment-methods.read", "transactions.read"],
            },
        },
    ],
    limit: 1,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: null,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                            | [components.Role](../../models/components/role.md)[]                                                               | :heavy_minus_sign:                                                                                                 | A list of roles.                                                                                                   |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |