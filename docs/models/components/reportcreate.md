# ReportCreate

## Example Usage

```typescript
import { ReportCreate } from "@gr4vy/sdk/models/components";

let value: ReportCreate = {
  name: "Monthly Transaction Report",
  schedule: "daily",
  scheduleEnabled: true,
  scheduleTimezone: "UTC",
  spec: {
    params: {
      "filters": {
        "created_at": {
          "end": "2024-05-31T23:59:59Z",
          "start": "2024-05-01T00:00:00Z",
        },
      },
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name of the report.                                                | Monthly Transaction Report                                             |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | A description of the report.                                           | Monthly transaction summary for May 2024.                              |
| `schedule`                                                             | [components.ReportSchedule](../../models/components/reportschedule.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `scheduleEnabled`                                                      | *boolean*                                                              | :heavy_check_mark:                                                     | Whether the report schedule is enabled.                                | true                                                                   |
| `scheduleTimezone`                                                     | *string*                                                               | :heavy_minus_sign:                                                     | The timezone for the report schedule.                                  | UTC                                                                    |
| `spec`                                                                 | *components.Spec*                                                      | :heavy_check_mark:                                                     | The report specification.                                              |                                                                        |