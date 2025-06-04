# ReportExecutionContext

## Example Usage

```typescript
import { ReportExecutionContext } from "@gr4vy/sdk/models/components";

let value: ReportExecutionContext = {
  referenceTimestamp: new Date("2024-05-30T12:34:56.000Z"),
  referenceTimezone: "UTC",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `referenceTimestamp`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The reference timestamp for the report execution context.                                     | 2024-05-30T12:34:56.000Z                                                                      |
| `referenceTimezone`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | The reference timezone for the report execution context.                                      | UTC                                                                                           |