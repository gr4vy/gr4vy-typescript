# RefundStatus

## Example Usage

```typescript
import { RefundStatus } from "@gr4vy/sdk/models/components";

let value: RefundStatus = "processing";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"processing" | "succeeded" | "failed" | "declined" | "voided" | Unrecognized<string>
```