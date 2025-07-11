# AddReportRequest

## Example Usage

```typescript
import { AddReportRequest } from "@gr4vy/sdk/models/operations";

let value: AddReportRequest = {
  reportCreate: {
    name: "Monthly Transaction Report",
    schedule: "daily",
    scheduleEnabled: true,
    scheduleTimezone: "UTC",
    spec: {
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `merchantAccountId`                                                | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the merchant account to use for this request.            |
| `reportCreate`                                                     | [components.ReportCreate](../../models/components/reportcreate.md) | :heavy_check_mark:                                                 | N/A                                                                |