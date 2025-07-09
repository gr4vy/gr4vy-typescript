# ListReportExecutionsResponse

## Example Usage

```typescript
import { ListReportExecutionsResponse } from "@gr4vy/sdk/models/operations";

let value: ListReportExecutionsResponse = {
  result: {
    items: [
      {
        id: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
        createdAt: new Date("2024-05-30T12:34:56.000Z"),
        updatedAt: new Date("2024-05-30T13:00:00.000Z"),
        status: "dispatched",
        context: {
          referenceTimestamp: new Date("2024-05-30T12:34:56.000Z"),
          referenceTimezone: "UTC",
        },
        report: {
          id: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
          merchantAccountId: "merchant-account-12345",
          name: "Monthly Transaction Report",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `result`                                                                   | [components.ReportExecutions](../../models/components/reportexecutions.md) | :heavy_check_mark:                                                         | N/A                                                                        |