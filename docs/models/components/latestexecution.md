# LatestExecution

Information about the latest execution to process data for the Health Dashboard. This value is null if the data has not been fully processed for the first time yet.

## Example Usage

```typescript
import { LatestExecution } from "@gr4vy/sdk/models/components";

let value: LatestExecution = {
    timestamp: new Date("2023-07-26T19:23:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the data was last processed.                                           | 2023-07-26T19:23:00.000Z                                                                      |