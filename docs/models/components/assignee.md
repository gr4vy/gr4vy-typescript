# Assignee

The assignee for this role assignment.

## Example Usage

```typescript
import { Assignee } from "@gr4vy/sdk/models/components";

let value: Assignee = {
    type: "user",
    id: "42aae896-8ce2-4a60-b80a-5f6ae1dfbbd4",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [components.RoleAssignmentAssigneeType](../../models/components/roleassignmentassigneetype.md) | :heavy_minus_sign:                                                                             | The type of the assignee.                                                                      | user                                                                                           |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | The unique ID of the assignee.                                                                 | 42aae896-8ce2-4a60-b80a-5f6ae1dfbbd4                                                           |