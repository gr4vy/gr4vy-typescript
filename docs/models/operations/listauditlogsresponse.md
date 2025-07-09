# ListAuditLogsResponse

## Example Usage

```typescript
import { ListAuditLogsResponse } from "@gr4vy/sdk/models/operations";

let value: ListAuditLogsResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `result`                                                                 | [components.AuditLogEntries](../../models/components/auditlogentries.md) | :heavy_check_mark:                                                       | N/A                                                                      |