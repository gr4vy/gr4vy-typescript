# ReportExecutionUrl

## Example Usage

```typescript
import { ReportExecutionUrl } from "@gr4vy/sdk/models/components";

let value: ReportExecutionUrl = {
  url: "https://example.com/download/report.csv?signature=abc123",
  expiresAt: new Date("2024-06-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | A signed URL to download the report execution file.                                           | https://example.com/download/report.csv?signature=abc123                                      |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when the download URL expires.                                              | 2024-06-01T00:00:00.000Z                                                                      |