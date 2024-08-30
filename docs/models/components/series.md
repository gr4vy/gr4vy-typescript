# Series

Contains two series of data points used to build the line chart. Each series contains aggregations of data created over the duration of the specified period (e.g. `7-days`). The `previous` series contains aggregations from the period immediately preceding the `current` series.

## Example Usage

```typescript
import { Series } from "@gr4vy/sdk/models/components";

let value: Series = {
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
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `current`                                                                                              | [components.Current](../../models/components/current.md)                                               | :heavy_minus_sign:                                                                                     | Metrics for the transactions and refunds created during the current period aggregated by hour or day.  |
| `previous`                                                                                             | [components.Previous](../../models/components/previous.md)                                             | :heavy_minus_sign:                                                                                     | Metrics for the transactions and refunds created during the previous period aggregated by hour or day. |