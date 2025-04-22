# ListAuditLogsResponse

## Example Usage

```typescript
import { ListAuditLogsResponse } from "@gr4vy/sdk/models/operations";

let value: ListAuditLogsResponse = {
  result: {
    items: [
      {
        id: "8d3fe99b-1422-42e6-bbb3-932d95ae5f79",
        merchantAccountId: "default",
        resource: {
          type: "user",
          id: "d0f98bc9-8915-413c-a1de-d853eb658c1b",
          name: "Jane Zoe",
        },
        action: "created",
        user: {
          id: "14b7b8c5-a6ba-4fb6-bbab-52d43c7f37ef",
          name: "John Doe",
          emailAddress: "john@example.com",
          isStaff: false,
          status: "pending",
        },
        timestamp: new Date("2022-01-01T00:00:00+00:00"),
      },
    ],
    nextCursor: "ZXhhbXBsZTE",
    previousCursor: "Xkjss7asS",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.CollectionAuditLogEntry](../../models/components/collectionauditlogentry.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |