# RoleAssignmentRequest

A request to create a role assignment.

## Example Usage

```typescript
import { RoleAssignmentRequest } from "@gr4vy/sdk/models/components";

let value: RoleAssignmentRequest = {
    role: {
        id: "462ab2e2-3e29-44bd-b39f-e4d1293affbb",
    },
    assignee: {
        type: "user",
        id: "42aae896-8ce2-4a60-b80a-5f6ae1dfbbd4",
    },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `role`                                                                                               | [components.RoleAssignmentRequestRole](../../models/components/roleassignmentrequestrole.md)         | :heavy_check_mark:                                                                                   | The role to associate with the role assignment.                                                      |
| `assignee`                                                                                           | [components.RoleAssignmentRequestAssignee](../../models/components/roleassignmentrequestassignee.md) | :heavy_check_mark:                                                                                   | The assignee to associate with the role assignment.                                                  |