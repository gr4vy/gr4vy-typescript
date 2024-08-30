# AuditLogs

A list of audit log entries.

## Example Usage

```typescript
import { AuditLogs } from "@gr4vy/sdk/models/components";

let value: AuditLogs = {
    items: [
        {
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
        },
    ],
    limit: 1,
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: null,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                            | [components.AuditLog](../../models/components/auditlog.md)[]                                                       | :heavy_minus_sign:                                                                                                 | A list of audit log entries.                                                                                       |                                                                                                                    |
| `limit`                                                                                                            | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The limit applied to request. This represents the number of items that are at<br/>maximum returned by this request. | 1                                                                                                                  |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | ZXhhbXBsZTE                                                                                                        |
| `previousCursor`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The cursor that represents the next page of results. Use the `cursor` query<br/>parameter to fetch this page of items. | <nil>                                                                                                              |