# Role

## Example Usage

```typescript
import { Role } from "@gr4vy/sdk/models/components";

let value: Role = {
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
  ],
  isStandaloneAssignable: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | *"role"*                                                                                 | :heavy_minus_sign:                                                                       | Always `role`.                                                                           | role                                                                                     |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique ID for the role.                                                              | fe26475d-ec3e-4884-9553-f7356683f7f9                                                     |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | The human-readable name of the role.                                                     | Administrator                                                                            |
| `slug`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique, human-readable identifier for the role.                                      | administrator                                                                            |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | A description of the access this role grants.                                            | Full read and write access.                                                              |
| `permissions`                                                                            | [components.PermissionSet](../../models/components/permissionset.md)                     | :heavy_check_mark:                                                                       | The permissions granted by a role.                                                       |                                                                                          |
| `assignableTo`                                                                           | [components.RoleAssigneeType](../../models/components/roleassigneetype.md)[]             | :heavy_check_mark:                                                                       | The types of resource this role can be assigned to.                                      |                                                                                          |
| `appliesTo`                                                                              | *string*[]                                                                               | :heavy_check_mark:                                                                       | The slugs of the roles this role is an add-on of. Empty when this role is not an add-on. |                                                                                          |
| `isStandaloneAssignable`                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | Whether this role can be assigned on its own, without being combined with another role.  |                                                                                          |