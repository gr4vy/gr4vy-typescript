# CreateReportExecutionUrlRequest

## Example Usage

```typescript
import { CreateReportExecutionUrlRequest } from "@gr4vy/sdk/models/operations";

let value: CreateReportExecutionUrlRequest = {
  reportId: "4d4c7123-b794-4fad-b1b9-5ab2606e6bbe",
  reportExecutionId: "003bc416-f32a-420c-8eb2-062a386e1fb0",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `reportId`                                                 | *string*                                                   | :heavy_check_mark:                                         | The ID of the report to retrieve a URL for.                | 4d4c7123-b794-4fad-b1b9-5ab2606e6bbe                       |
| `reportExecutionId`                                        | *string*                                                   | :heavy_check_mark:                                         | The ID of the execution of a report to retrieve a URL for. | 003bc416-f32a-420c-8eb2-062a386e1fb0                       |
| `merchantAccountId`                                        | *string*                                                   | :heavy_minus_sign:                                         | The ID of the merchant account to use for this request.    |                                                            |