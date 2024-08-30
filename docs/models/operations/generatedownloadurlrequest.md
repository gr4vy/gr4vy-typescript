# GenerateDownloadUrlRequest

## Example Usage

```typescript
import { GenerateDownloadUrlRequest } from "@gr4vy/sdk/models/operations";

let value: GenerateDownloadUrlRequest = {
    reportId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
    reportExecutionId: "8724fd24-5489-4a5d-90fd-0604df7d3b83",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `reportId`                            | *string*                              | :heavy_check_mark:                    | The unique ID for a report.           | 8724fd24-5489-4a5d-90fd-0604df7d3b83  |
| `reportExecutionId`                   | *string*                              | :heavy_check_mark:                    | The unique ID for a report execution. | 8724fd24-5489-4a5d-90fd-0604df7d3b83  |