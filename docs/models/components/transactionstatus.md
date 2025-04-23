# TransactionStatus

## Example Usage

```typescript
import { TransactionStatus } from "@gr4vy/sdk/models/components";

let value: TransactionStatus = "capture_succeeded";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"processing" | "authorization_succeeded" | "authorization_declined" | "authorization_failed" | "authorization_voided" | "authorization_void_pending" | "capture_succeeded" | "capture_pending" | "buyer_approval_pending" | Unrecognized<string>
```