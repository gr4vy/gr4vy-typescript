# ListAllReportExecutionsRequest

## Example Usage

```typescript
import { ListAllReportExecutionsRequest } from "@gr4vy/sdk/models/operations";

let value: ListAllReportExecutionsRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reportName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAtLte`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAtGte`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.ReportExecutionStatus](../../models/components/reportexecutionstatus.md)[]        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `creatorId`                                                                                   | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |