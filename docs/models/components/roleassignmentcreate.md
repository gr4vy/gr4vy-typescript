# RoleAssignmentCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { RoleAssignmentCreate } from "@gr4vy/sdk/models/components";

let value: RoleAssignmentCreate = {
    role: {
        id: "ab3c20c4-f378-49fd-871f-99dd2efd121a",
    },
    assignee: {
        type: "private_key",
        id: "6f1e674b-db04-4f15-b560-82d68ea19f1d",
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [components.RoleAssignmentCreateType](../../models/components/roleassignmentcreatetype.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `role`                                                                                     | [components.Role](../../models/components/role.md)                                         | :heavy_check_mark:                                                                         | Base model with JSON encoders.                                                             |
| `assignee`                                                                                 | [components.RoleAssignee](../../models/components/roleassignee.md)                         | :heavy_check_mark:                                                                         | Base model with JSON encoders.                                                             |