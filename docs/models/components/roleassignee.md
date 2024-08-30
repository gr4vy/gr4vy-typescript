# RoleAssignee

Base model with JSON encoders.

## Example Usage

```typescript
import { RoleAssignee } from "@gr4vy/sdk/models/components";

let value: RoleAssignee = {
    type: "user",
    id: "7051339d-0808-46a1-8403-94c26071f93f",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.RoleAssigneeType](../../models/components/roleassigneetype.md) | :heavy_check_mark:                                                         | An enumeration.                                                            |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |