# GetHealthDashboardTotalVolumeRequest

## Example Usage

```typescript
import { GetHealthDashboardTotalVolumeRequest } from "@gr4vy/sdk/models/operations";

let value: GetHealthDashboardTotalVolumeRequest = {
    currency: "USD",
    period: "7-days",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Filters the results to the set of data aggregated by the currency.<br/>A currency is formatted as 3-letter ISO currency code. | USD                                                                                                                       |
| `period`                                                                                                                  | [operations.QueryParamPeriod](../../models/operations/queryparamperiod.md)                                                | :heavy_check_mark:                                                                                                        | Filters the results to the set of data aggregated over the<br/>duration of the specified period.                          | 7-days                                                                                                                    |