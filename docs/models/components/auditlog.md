# AuditLog

A log of a change that occurred in the Gr4vy instance.

## Example Usage

```typescript
import { AuditLog } from "@gr4vy/sdk/models/components";

let value: AuditLog = {
    type: "audit-log",
    id: "8d3fe99b-1422-42e6-bbb3-932d95ae5f79",
    timestamp: new Date("2022-01-01T00:00:00+00:00"),
    action: "created",
    merchantAccountId: "default",
    user: {
        id: "77a76f7e-d2de-4bbc-ada9-d6a0015e6bd5",
        name: "John L",
        emailAddress: "john@example.com",
        staff: false,
        status: "active",
    },
    resource: {
        type: "buyer",
        id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
        name: "Samuel J",
    },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.AuditLogType](../../models/components/auditlogtype.md)                            | :heavy_minus_sign:                                                                            | `audit-log`.                                                                                  | audit-log                                                                                     |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the audit log entry.                                                                | 8d3fe99b-1422-42e6-bbb3-932d95ae5f79                                                          |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time that the action was performed.                                              | 2022-01-01T00:00:00+00:00                                                                     |
| `action`                                                                                      | [components.AuditLogAction](../../models/components/auditlogaction.md)                        | :heavy_minus_sign:                                                                            | The action that was performed.                                                                | created                                                                                       |
| `merchantAccountId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the merchant account this entry was created for.                                    | default                                                                                       |
| `user`                                                                                        | [components.User](../../models/components/user.md)                                            | :heavy_minus_sign:                                                                            | The user who performed the action.                                                            |                                                                                               |
| `resource`                                                                                    | [components.Resource](../../models/components/resource.md)                                    | :heavy_minus_sign:                                                                            | The resource that was changed.                                                                |                                                                                               |