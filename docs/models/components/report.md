# Report

## Example Usage

```typescript
import { Report } from "@gr4vy/sdk/models/components";

let value: Report = {
  id: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
  merchantAccountId: "merchant-account-12345",
  name: "Monthly Transaction Report",
  createdAt: new Date("2024-05-30T12:34:56.000Z"),
  updatedAt: new Date("2024-05-30T13:00:00.000Z"),
  schedule: "daily",
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"report"*                                                                                    | :heavy_minus_sign:                                                                            | Always `report`.                                                                              | report                                                                                        |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID for the report.                                                                 | a1b2c3d4-5678-90ab-cdef-1234567890ab                                                          |
| `merchantAccountId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | The merchant account ID this report belongs to.                                               | merchant-account-12345                                                                        |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the report.                                                                       | Monthly Transaction Report                                                                    |
| `creatorId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the user who created the report.                                                    | d290f1ee-6c54-4b01-90e6-d701748f0851                                                          |
| `creatorDisplayName`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name of the report creator.                                                       | Jane Doe                                                                                      |
| `creatorType`                                                                                 | [components.ReportCreatorType](../../models/components/reportcreatortype.md)                  | :heavy_minus_sign:                                                                            | The type of the report creator.                                                               | user                                                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this report was created at.                                                          | 2024-05-30T12:34:56.000Z                                                                      |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this report was last updated.                                                        | 2024-05-30T13:00:00.000Z                                                                      |
| `nextExecutionAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The next scheduled execution time for the report.                                             | 2024-06-01T00:00:00.000Z                                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | A description of the report.                                                                  | Monthly transaction summary for May 2024.                                                     |
| `schedule`                                                                                    | [components.ReportSchedule](../../models/components/reportschedule.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `scheduleEnabled`                                                                             | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the report schedule is enabled.                                                       | true                                                                                          |
| `scheduleTimezone`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | The timezone for the report schedule.                                                         | UTC                                                                                           |
| `spec`                                                                                        | [components.ReportSpec](../../models/components/reportspec.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `latestExecution`                                                                             | [components.ReportExecutionSummary](../../models/components/reportexecutionsummary.md)        | :heavy_minus_sign:                                                                            | The latest execution summary for the report.                                                  |                                                                                               |