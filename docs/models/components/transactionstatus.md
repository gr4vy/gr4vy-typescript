# TransactionStatus

## Example Usage

```typescript
import { TransactionStatus } from "@gr4vy/sdk/models/components";

let value: TransactionStatus = "capture_succeeded";
```

## Values

```typescript
"processing" | "authorization_succeeded" | "authorization_declined" | "authorization_failed" | "authorization_voided" | "authorization_void_pending" | "capture_succeeded" | "capture_pending" | "buyer_approval_pending"
```