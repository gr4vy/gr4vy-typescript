# AuditLogEntryUser

## Example Usage

```typescript
import { AuditLogEntryUser } from "@gr4vy/sdk/models/components";

let value: AuditLogEntryUser = {
  name: "John Doe",
  isStaff: false,
  status: "active",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | *"user"*                                                       | :heavy_minus_sign:                                             | Always `user`.                                                 | user                                                           |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | The ID of the user.                                            | 14b7b8c5-a6ba-4fb6-bbab-52d43c7f37ef                           |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of the user.                                          | John Doe                                                       |
| `emailAddress`                                                 | *string*                                                       | :heavy_minus_sign:                                             | The email address for this user.                               | john@example.com                                               |
| `isStaff`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | Whether this is a Gr4vy staff user.                            | false                                                          |
| `status`                                                       | [components.UserStatus](../../models/components/userstatus.md) | :heavy_check_mark:                                             | N/A                                                            |                                                                |