# TransactionStatusSummaryTransactionStatus

The status of the transaction.

## Example Usage

```typescript
import { TransactionStatusSummaryTransactionStatus } from "@gr4vy/sdk/models/components";

let value: TransactionStatusSummaryTransactionStatus =
  "authorization_succeeded";
```

## Values

```typescript
"processing" | "authorization_succeeded" | "authorization_declined" | "authorization_failed" | "authorization_voided" | "authorization_void_pending" | "capture_succeeded" | "capture_pending" | "buyer_approval_pending"
```