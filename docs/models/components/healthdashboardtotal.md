# HealthDashboardTotal

Health Dashboard transactions and refunds line chart data.

## Example Usage

```typescript
import { HealthDashboardTotal } from "@gr4vy/sdk/models/components";

let value: HealthDashboardTotal = {
    type: "health-dashboard.total",
    summary: {
        transactionsAccepted: 7890,
        transactionsAcceptedDeltaPct: -5,
        transactionsAuthorizedRate: 89,
        transactionsAuthorizedRateDelta: 15,
        refunds: 590,
        refundsDeltaPct: 7,
    },
    series: {
        current: {
            firstInterval: "2024-05-07T00:00:00Z/P1D",
            transactionsAccepted: [1919, 2194, 1920, 2184, 1328, 1868, 2001, 2082],
            transactionsAuthorizedRate: [66, 89, 75, 98, 100, null, 95, 100],
            refunds: [119, 294, 120, 184, 138, 168, 201, 182],
        },
        previous: {
            firstInterval: "2024-04-29T00:00:00Z/P1D",
            transactionsAccepted: [1919, 2194, 1920, 2184, 1328, 1868, 2001, 2082],
            transactionsAuthorizedRate: [66, 89, 75, 98, 100, null, 95, 100],
            refunds: [119, 294, 120, 184, 138, 168, 201, 182],
        },
    },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                | [components.HealthDashboardTotalType](../../models/components/healthdashboardtotaltype.md)                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | The type of this resource.                                                                                                                                                                                                                                                            | health-dashboard.total                                                                                                                                                                                                                                                                |
| `summary`                                                                                                                                                                                                                                                                             | [components.Summary](../../models/components/summary.md)                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | Summary of the aggregated data.                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                       |
| `series`                                                                                                                                                                                                                                                                              | [components.Series](../../models/components/series.md)                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | Contains two series of data points used to build the line chart. Each series contains aggregations of data created over the duration of the specified period (e.g. `7-days`). The `previous` series contains aggregations from the period immediately preceding the `current` series. |                                                                                                                                                                                                                                                                                       |