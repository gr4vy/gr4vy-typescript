# ListReportsRequest

## Example Usage

```typescript
import { ListReportsRequest } from "@gr4vy/sdk/models/operations";

let value: ListReportsRequest = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `cursor`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | A pointer to the page of results to return.                              | ZXhhbXBsZTE                                                              |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | The maximum number of items that are at returned.                        | 20                                                                       |
| `schedule`                                                               | [components.ReportSchedule](../../models/components/reportschedule.md)[] | :heavy_minus_sign:                                                       | Filters the reports by the type of schedule at which they run.           | [<br/>"daily",<br/>"monthly"<br/>]                                       |
| `scheduleEnabled`                                                        | *boolean*                                                                | :heavy_minus_sign:                                                       | Filters the reports by wether their schedule is enabled.                 | true                                                                     |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Filters the reports by searching their name for (partial) matches.       | My report                                                                |
| `merchantAccountId`                                                      | *string*                                                                 | :heavy_minus_sign:                                                       | The ID of the merchant account to use for this request.                  |                                                                          |