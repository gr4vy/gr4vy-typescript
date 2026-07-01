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
      model: "transaction_retries",
      params: {
        "filters": {
          "created_at": {
            "end": "2024-05-31T23:59:59Z",
            "start": "2024-05-01T00:00:00Z",
          },
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