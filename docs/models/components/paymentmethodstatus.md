# PaymentMethodStatus

## Example Usage

```typescript
import { PaymentMethodStatus } from "@gr4vy/sdk/models/components";

let value: PaymentMethodStatus = "processing";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"processing" | "buyer_approval_required" | "succeeded" | "failed" | "paused" | Unrecognized<string>
```