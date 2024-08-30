# Role

## Example Usage

```typescript
import { Role } from "@gr4vy/sdk/models/components";

let value: Role = {
    type: "role",
    id: "462ab2e2-3e29-44bd-b39f-e4d1293affbb",
    name: "Support",
    description: "Customer support agents",
    permissions: {
        allow: ["buyers.read", "payment-methods.read", "transactions.read"],
    },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [components.RoleType](../../models/components/roletype.md)               | :heavy_minus_sign:                                                       | The type of this resource. Always `role`.                                | role                                                                     |
| `id`                                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | The unique ID for this role.                                             | 462ab2e2-3e29-44bd-b39f-e4d1293affbb                                     |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The unique name for this role.                                           | Support                                                                  |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | The description for this role.                                           | Customer support agents                                                  |
| `permissions`                                                            | [components.RolePermissions](../../models/components/rolepermissions.md) | :heavy_minus_sign:                                                       | The permissions associated with a role.                                  |                                                                          |