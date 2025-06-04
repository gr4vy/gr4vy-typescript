# AuditLogEntries

## Example Usage

```typescript
import { AuditLogEntries } from "@gr4vy/sdk/models/components";

let value: AuditLogEntries = {
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.AuditLogEntry](../../models/components/auditlogentry.md)[] | :heavy_check_mark:                                                     | A list of items returned for this request.                             |                                                                        |
| `limit`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | The number of items for this page.                                     | 20                                                                     |
| `nextCursor`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | The cursor pointing at the next page of items.                         | ZXhhbXBsZTE                                                            |
| `previousCursor`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | The cursor pointing at the previous page of items.                     | Xkjss7asS                                                              |