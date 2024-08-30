# Schedule

Specifies the schedule of the report.

If this is a one-off report, set this value to `once`.

If this is a recurring report, this value should be set to the
frequency by which the report will be executed. For example, a
`monthly` schedule means that the report will be periodically
executed at the start of each month.

Note that a `weekly` schedule means that the report will be
executed at the start of every Monday.

## Example Usage

```typescript
import { Schedule } from "@gr4vy/sdk/models/components";

let value: Schedule = "monthly";
```

## Values

```typescript
"daily" | "monthly" | "once" | "weekly"
```