# ListRolesResponse

## Example Usage

```typescript
import { ListRolesResponse } from "@gr4vy/sdk/models/operations";

let value: ListRolesResponse = {
  result: {
    items: [
      {
        id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
        name: "Administrator",
        slug: "administrator",
        description: "Full read and write access.",
        permissions: {
          allow: [
            "transactions.read",
            "reports.read",
          ],
        },
        assignableTo: [],
        appliesTo: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        isStandaloneAssignable: true,
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `result`                                                               | [components.CollectionRole](../../models/components/collectionrole.md) | :heavy_check_mark:                                                     | N/A                                                                    |