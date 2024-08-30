# User

The user who performed the action.

## Example Usage

```typescript
import { User } from "@gr4vy/sdk/models/components";

let value: User = {
    id: "77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5",
    name: "John L",
    emailAddress: "john@example.com",
    staff: false,
    status: "active",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | The ID of the user.                                                    | 77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5                                   |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | The name of the user.                                                  | John L                                                                 |
| `emailAddress`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | The email address for this user.                                       | john@example.com                                                       |
| `staff`                                                                | *boolean*                                                              | :heavy_minus_sign:                                                     | Whether the user is Gr4vy staff.                                       | false                                                                  |
| `status`                                                               | [components.AuditLogStatus](../../models/components/auditlogstatus.md) | :heavy_minus_sign:                                                     | The status of the user.                                                | active                                                                 |