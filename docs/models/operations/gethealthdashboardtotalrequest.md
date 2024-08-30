# GetHealthDashboardTotalRequest

## Example Usage

```typescript
import { GetHealthDashboardTotalRequest } from "@gr4vy/sdk/models/operations";

let value: GetHealthDashboardTotalRequest = {
    period: "7-days",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `period`                                                                                     | [operations.Period](../../models/operations/period.md)                                       | :heavy_check_mark:                                                                           | Filters the results to the set of data aggregated over the<br/>duration of the specified period. | 7-days                                                                                       |