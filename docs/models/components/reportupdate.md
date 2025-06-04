# ReportUpdate

## Example Usage

```typescript
import { ReportUpdate } from "@gr4vy/sdk/models/components";

let value: ReportUpdate = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `name`                                    | *string*                                  | :heavy_minus_sign:                        | The name of the report.                   | Monthly Transaction Report                |
| `description`                             | *string*                                  | :heavy_minus_sign:                        | A description of the report.              | Monthly transaction summary for May 2024. |
| `scheduleEnabled`                         | *boolean*                                 | :heavy_minus_sign:                        | Whether the report schedule is enabled.   | true                                      |