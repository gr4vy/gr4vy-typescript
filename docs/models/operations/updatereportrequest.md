# UpdateReportRequest

## Example Usage

```typescript
import { UpdateReportRequest } from "@gr4vy/sdk/models/operations";

let value: UpdateReportRequest = {
  reportId: "4d4c7123-b794-4fad-b1b9-5ab2606e6bbe",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `reportId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | The ID of the report to edit.                                      | 4d4c7123-b794-4fad-b1b9-5ab2606e6bbe                               |
| `merchantAccountId`                                                | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the merchant account to use for this request.            |                                                                    |
| `reportUpdate`                                                     | [components.ReportUpdate](../../models/components/reportupdate.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |