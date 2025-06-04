# GetReportExecutionRequest

## Example Usage

```typescript
import { GetReportExecutionRequest } from "@gr4vy/sdk/models/operations";

let value: GetReportExecutionRequest = {
  reportExecutionId: "003bc416-f32a-420c-8eb2-062a386e1fb0",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `reportExecutionId`                                          | *string*                                                     | :heavy_check_mark:                                           | The ID of the execution of a report to retrieve details for. | 003bc416-f32a-420c-8eb2-062a386e1fb0                         |
| `merchantAccountId`                                          | *string*                                                     | :heavy_minus_sign:                                           | The ID of the merchant account to use for this request.      |                                                              |