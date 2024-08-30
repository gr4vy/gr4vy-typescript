# ReportCreate

Base model with JSON encoders.

## Example Usage

```typescript
import { ReportCreate } from "@gr4vy/sdk/models/components";

let value: ReportCreate = {
    name: "<value>",
    schedule: "daily",
    scheduleEnabled: false,
    spec: {
        params: {},
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `schedule`                                                             | [components.ReportSchedule](../../models/components/reportschedule.md) | :heavy_check_mark:                                                     | An enumeration.                                                        |
| `scheduleEnabled`                                                      | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `scheduleTimezone`                                                     | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `spec`                                                                 | *components.Spec*                                                      | :heavy_check_mark:                                                     | N/A                                                                    |