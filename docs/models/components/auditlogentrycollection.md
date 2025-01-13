# AuditLogEntryCollection

Collection of results.

## Example Usage

```typescript
import { AuditLogEntryCollection } from "@gr4vy/sdk/models/components";

let value: AuditLogEntryCollection = {
  items: [
    {
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
        status: "pending",
      },
      timestamp: new Date("2022-01-01T00:00:00+00:00"),
    },
  ],
  limit: 20,
  nextCursor: "ZXhhbXBsZTE",
  previousCursor: "Xkjss7asS",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.AuditLogEntry](../../models/components/auditlogentry.md)[] | :heavy_check_mark:                                                     | A list of items returned for this request.                             |                                                                        |
| `limit`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | The number of items for this page.                                     | 20                                                                     |
| `nextCursor`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | The cursor pointing at the next page of items.                         | ZXhhbXBsZTE                                                            |
| `previousCursor`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | The cursor pointing at the previous page of items.                     | Xkjss7asS                                                              |