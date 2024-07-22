# Series

Contains two series of data points used to build the line chart. Each series contains aggregations of data created over the duration of the specified period (e.g. `7-days`). The `previous` series contains aggregations from the period immediately preceding the `current` series.


## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `current`                                                                                              | [components.Current](../../models/components/current.md)                                               | :heavy_minus_sign:                                                                                     | Metrics for the transactions and refunds created during the current period aggregated by hour or day.  |
| `previous`                                                                                             | [components.Previous](../../models/components/previous.md)                                             | :heavy_minus_sign:                                                                                     | Metrics for the transactions and refunds created during the previous period aggregated by hour or day. |