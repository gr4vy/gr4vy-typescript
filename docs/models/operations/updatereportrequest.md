# UpdateReportRequest

## Example Usage

```typescript
import { UpdateReportRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateReportRequest = {
    reportId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    reportUpdate: {
        name: "Failed Authorizations 042022",
        description: "Transactions that failed to authorize in April 2022",
        scheduleEnabled: true,
    },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `reportId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | The unique ID for a report.                                        | 8724fd24-5489-4a5d-90fd-0604df7d3b83                               |
| `reportUpdate`                                                     | [components.ReportUpdate](../../models/components/reportupdate.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |