# ReportSchedule

Specifies the schedule of this report.

If this is a one-off report, this value is `once`.

If this is a recurring report, this value is set to the
frequency by which the report will be executed. For example, a
`monthly` schedule means that this report will be periodically
executed at the start of each month.

Note that a `weekly` schedule means that the report is executed
at the start of every Monday.

## Example Usage

```typescript
import { ReportSchedule } from "@gr4vy/sdk/models/components";

let value: ReportSchedule = "monthly";
```

## Values

```typescript
"daily" | "monthly" | "once" | "weekly"
```