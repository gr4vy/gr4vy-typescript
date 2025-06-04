# ReportSchedule

## Example Usage

```typescript
import { ReportSchedule } from "@gr4vy/sdk/models/components";

let value: ReportSchedule = "weekly";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"daily" | "monthly" | "once" | "weekly" | Unrecognized<string>
```