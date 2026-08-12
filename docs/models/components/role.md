# Role

## Example Usage

```typescript
import { Role } from "@gr4vy/sdk/models/components";

let value: Role = {
  id: "44989d00-7bbd-498c-a44b-eef9bea9c6c6",
  name: "<value>",
  slug: "administrator",
  description:
    "see bah barring unaware rally indeed symbolise federate uneven bah",
  permissions: {
    allow: [],
  },
  assignableTo: [],
  appliesTo: [],
  isStandaloneAssignable: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | *"role"*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `slug`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique, human-readable identifier for the role.                                      | administrator                                                                            |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `permissions`                                                                            | [components.PermissionSet](../../models/components/permissionset.md)                     | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `assignableTo`                                                                           | [components.RoleAssigneeType](../../models/components/roleassigneetype.md)[]             | :heavy_check_mark:                                                                       | The types of resource this role can be assigned to.                                      |                                                                                          |
| `appliesTo`                                                                              | *string*[]                                                                               | :heavy_check_mark:                                                                       | The slugs of the roles this role is an add-on of. Empty when this role is not an add-on. |                                                                                          |
| `isStandaloneAssignable`                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | Whether this role can be assigned on its own, without being combined with another role.  |                                                                                          |