# RoleAssignmentRequestAssignee

The assignee to associate with the role assignment.

## Example Usage

```typescript
import { RoleAssignmentRequestAssignee } from "@gr4vy/sdk/models/components";

let value: RoleAssignmentRequestAssignee = {
    type: "user",
    id: "42aae896-8ce2-4a60-b80a-5f6ae1dfbbd4",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [components.RoleAssignmentRequestType](../../models/components/roleassignmentrequesttype.md) | :heavy_check_mark:                                                                           | The type of the assignee to associate with the role assignment.                              | user                                                                                         |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the assignee to associate with the role assignment.                                | 42aae896-8ce2-4a60-b80a-5f6ae1dfbbd4                                                         |