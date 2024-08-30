# ReportSummary

The report associated with this report execution.

## Example Usage

```typescript
import { ReportSummary } from "@gr4vy/sdk/models/components";

let value: ReportSummary = {
    type: "report",
    id: "fe26475d-ec3e-4884-9553-f7356683f7f9",
    merchantAccountId: "default",
    name: "Failed Authorizations 042022",
    creatorId: "bd5d40d1-913b-419c-bd62-84efc46e0026",
    creatorDisplayName: "John Doe",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [components.ReportExecutionReportType](../../models/components/reportexecutionreporttype.md)   | :heavy_minus_sign:                                                                             | The type of this resource. Is always `report`.                                                 | report                                                                                         |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | The unique identifier for this report.                                                         | fe26475d-ec3e-4884-9553-f7356683f7f9                                                           |
| `merchantAccountId`                                                                            | *string*                                                                                       | :heavy_minus_sign:                                                                             | The unique ID for a merchant account.                                                          | default                                                                                        |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The name of this report.                                                                       | Failed Authorizations 042022                                                                   |
| `creatorId`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | The unique identifier for the creator of this report.                                          | bd5d40d1-913b-419c-bd62-84efc46e0026                                                           |
| `creatorDisplayName`                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | The name of the creator of this report.                                                        | John Doe                                                                                       |
| `creatorType`                                                                                  | [components.ReportExecutionCreatorType](../../models/components/reportexecutioncreatortype.md) | :heavy_minus_sign:                                                                             | The type of the creator of this report.                                                        |                                                                                                |