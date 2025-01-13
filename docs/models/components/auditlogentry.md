# AuditLogEntry

Base model with JSON encoders.

## Example Usage

```typescript
import { AuditLogEntry } from "@gr4vy/sdk/models/components";

let value: AuditLogEntry = {
  type: "audit-log",
  id: "8d3fe99b-1422-42e6-bbb3-932d95ae5f79",
  merchantAccountId: "default",
  resource: {
    type: "user",
    id: "d0f98bc9-8915-413c-a1de-d853eb658c1b",
    name: "Jane Zoe",
  },
  action: "created",
  user: {
    type: "user",
    id: "14b7b8c5-a6ba-4fb6-bbab-52d43c7f37ef",
    name: "John Doe",
    emailAddress: "john@example.com",
    isStaff: false,
    status: "deleted",
  },
  timestamp: new Date("2022-01-01T00:00:00+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.AuditLogEntryType](../../models/components/auditlogentrytype.md)                  | :heavy_minus_sign:                                                                            | Always `audit-log`.                                                                           | audit-log                                                                                     |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID for the audit log entry.                                                               | 8d3fe99b-1422-42e6-bbb3-932d95ae5f79                                                          |
| `merchantAccountId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the merchant account this entry was created for.                                    | default                                                                                       |
| `resource`                                                                                    | [components.Resource](../../models/components/resource.md)                                    | :heavy_check_mark:                                                                            | The resource that was changed.                                                                |                                                                                               |
| `action`                                                                                      | [components.AuditLogAction](../../models/components/auditlogaction.md)                        | :heavy_check_mark:                                                                            | The action that was performed.                                                                | created                                                                                       |
| `user`                                                                                        | [components.User](../../models/components/user.md)                                            | :heavy_check_mark:                                                                            | The user who performed the action.                                                            |                                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time that the action was performed.                                              | 2022-01-01T00:00:00+00:00                                                                     |