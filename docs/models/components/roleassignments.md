# RoleAssignments

A list of role assignments.

## Example Usage

```typescript
import { RoleAssignments } from "@gr4vy/sdk/models/components";

let value: RoleAssignments = {
    items: [
        {
            type: "role-assignment",
            id: "1cdac457-400f-4866-8da6-5c193a8db158",
            role: {
                type: "role",
                id: "462ab2e2-3e29-44bd-b39f-e4d1293affbb",
                name: "Support",
                description: "Customer support agents",
                permissions: {
                    allow: ["buyers.read", "payment-methods.read", "transactions.read"],
                },
            },
            assignee: {
                type: "user",
                id: "42aae896-8ce2-4a60-b80a-5f6ae1dfbbd4",
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
| `items`                                                                                                            | [components.RoleAssignment](../../models/components/roleassignment.md)[]                                           | :heavy_minus_sign:                                                                                                 | A list of role assignments.                                                                                        |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |