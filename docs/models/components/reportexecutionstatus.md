# ReportExecutionStatus

## Example Usage

```typescript
import { ReportExecutionStatus } from "@gr4vy/sdk/models/components";

let value: ReportExecutionStatus = "failed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"dispatched" | "failed" | "pending" | "processing" | "succeeded" | Unrecognized<string>
```