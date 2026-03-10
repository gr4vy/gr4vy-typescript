# PaymentMethodStatus

## Example Usage

```typescript
import { PaymentMethodStatus } from "@gr4vy/sdk/models/components";

let value: PaymentMethodStatus = "processing";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"processing" | "buyer_approval_required" | "succeeded" | "failed" | "paused" | Unrecognized<string>
```