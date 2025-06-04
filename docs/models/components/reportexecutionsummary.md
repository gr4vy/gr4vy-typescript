# ReportExecutionSummary

## Example Usage

```typescript
import { ReportExecutionSummary } from "@gr4vy/sdk/models/components";

let value: ReportExecutionSummary = {
  id: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
  createdAt: new Date("2024-05-30T12:34:56.000Z"),
  updatedAt: new Date("2024-05-30T13:00:00.000Z"),
  status: "processing",
  context: {
    referenceTimestamp: new Date("2024-05-30T12:34:56.000Z"),
    referenceTimezone: "UTC",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Always `report-execution`.                                                                    | report-execution                                                                              |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID for the report execution.                                                       | a1b2c3d4-5678-90ab-cdef-1234567890ab                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this report execution was created at.                                                | 2024-05-30T12:34:56.000Z                                                                      |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this report execution was last updated.                                              | 2024-05-30T13:00:00.000Z                                                                      |
| `status`                                                                                      | [components.ReportExecutionStatus](../../models/components/reportexecutionstatus.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `context`                                                                                     | [components.ReportExecutionContext](../../models/components/reportexecutioncontext.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |