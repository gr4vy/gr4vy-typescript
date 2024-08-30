# RoleAssignment

## Example Usage

```typescript
import { RoleAssignment } from "@gr4vy/sdk/models/components";

let value: RoleAssignment = {
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [components.RoleAssignmentType](../../models/components/roleassignmenttype.md) | :heavy_minus_sign:                                                             | The type of this resource. Always `role-assignment`.                           | role-assignment                                                                |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | The unique ID for this role assignment.                                        | 1cdac457-400f-4866-8da6-5c193a8db158                                           |
| `role`                                                                         | [components.Role](../../models/components/role.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `assignee`                                                                     | [components.Assignee](../../models/components/assignee.md)                     | :heavy_minus_sign:                                                             | The assignee for this role assignment.                                         |                                                                                |