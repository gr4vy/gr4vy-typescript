# ListReportsResponse

## Example Usage

```typescript
import { ListReportsResponse } from "@gr4vy/sdk/models/operations";

let value: ListReportsResponse = {
  result: {
    items: [
      {
        id: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
        merchantAccountId: "merchant-account-12345",
        name: "Monthly Transaction Report",
        createdAt: new Date("2024-05-30T12:34:56.000Z"),
        updatedAt: new Date("2024-05-30T13:00:00.000Z"),
        schedule: "weekly",
        scheduleEnabled: true,
        scheduleTimezone: "UTC",
        spec: {
          model: "transactions",
          params: {
            "fields": [
              "id",
              "status",
            ],
            "filters": {
              "status": [
                "succeeded",
              ],
            },
          },
        },
      },
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `result`                                                 | [components.Reports](../../models/components/reports.md) | :heavy_check_mark:                                       | N/A                                                      |