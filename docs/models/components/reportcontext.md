# ReportContext

Contains the context values used to compute the value of date-time
placeholders such as `month_start` and `month_end` if present in
the report's specification. Date-time placeholders are dynamic
timestamps that change with every report execution.

## Example Usage

```typescript
import { ReportContext } from "@gr4vy/sdk/models/components";

let value: ReportContext = {
    referenceTimestamp: new Date("2013-07-16T19:23:00.000+00:00"),
    referenceTimezone: "Europe/London",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `referenceTimestamp`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time used by the system as a reference point to<br/>compute date-time placeholders. | 2013-07-16T19:23:00.000+00:00                                                                 |
| `referenceTimezone`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The time zone used to compute date-time placeholders.                                         | Europe/London                                                                                 |