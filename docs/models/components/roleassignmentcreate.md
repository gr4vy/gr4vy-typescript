# RoleAssignmentCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { RoleAssignmentCreate } from "@gr4vy/sdk/models/components";

let value: RoleAssignmentCreate = {
    role: {
        id: "9fd871f9-9dd2-4efd-921a-a6f1e674bdb0",
    },
    assignee: {
        type: "user",
        id: "f1575608-2d68-4ea1-9f1d-17051339d080",
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [components.RoleAssignmentCreateType](../../models/components/roleassignmentcreatetype.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `role`                                                                                     | [components.Role](../../models/components/role.md)                                         | :heavy_check_mark:                                                                         | Base model with JSON encoders.                                                             |
| `assignee`                                                                                 | [components.RoleAssignee](../../models/components/roleassignee.md)                         | :heavy_check_mark:                                                                         | Base model with JSON encoders.                                                             |