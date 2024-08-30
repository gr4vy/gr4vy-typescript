# RoleAssignee

Base model with JSON encoders.

## Example Usage

```typescript
import { RoleAssignee } from "@gr4vy/sdk/models/components";

let value: RoleAssignee = {
    type: "private_key",
    id: "6a184039-4c26-4071-b93f-5f0642dac7af",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.RoleAssigneeType](../../models/components/roleassigneetype.md) | :heavy_check_mark:                                                         | An enumeration.                                                            |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |