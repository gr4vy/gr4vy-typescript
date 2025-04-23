# RefundStatus

## Example Usage

```typescript
import { RefundStatus } from "@gr4vy/sdk/models/components";

let value: RefundStatus = "processing";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"processing" | "succeeded" | "failed" | "declined" | "voided" | Unrecognized<string>
```