# AuditLogEntry

## Example Usage

```typescript
import { AuditLogEntry } from "@gr4vy/sdk/models/components";

let value: AuditLogEntry = {
  resource: {
    type: "user",
    id: "d0f98bc9-8915-413c-a1de-d853eb658c1b",
    name: "Jane Zoe",
  },
  action: "created",
  user: {
    name: "John Doe",
    isStaff: false,
    status: "pending",
  },
  timestamp: new Date("2022-01-01T00:00:00+00:00"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Always `audit-log`.                                                                           | audit-log                                                                                     |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID for the audit log entry.                                                               | 8d3fe99b-1422-42e6-bbb3-932d95ae5f79                                                          |
| `merchantAccountId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the merchant account this entry was created for.                                    | default                                                                                       |
| `resource`                                                                                    | [components.AuditLogEntryResource](../../models/components/auditlogentryresource.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `action`                                                                                      | [components.AuditLogAction](../../models/components/auditlogaction.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           | created                                                                                       |
| `user`                                                                                        | [components.AuditLogEntryUser](../../models/components/auditlogentryuser.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time that the action was performed.                                              | 2022-01-01T00:00:00+00:00                                                                     |