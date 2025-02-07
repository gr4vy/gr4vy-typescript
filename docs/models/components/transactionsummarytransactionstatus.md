# TransactionSummaryTransactionStatus

The status of the transaction for the `payment_method`. The status may change over time as asynchronous processing events occur.

## Example Usage

```typescript
import { TransactionSummaryTransactionStatus } from "@gr4vy/sdk/models/components";

let value: TransactionSummaryTransactionStatus = "authorization_succeeded";
```

## Values

```typescript
"processing" | "authorization_succeeded" | "authorization_declined" | "authorization_failed" | "authorization_voided" | "authorization_void_pending" | "capture_succeeded" | "capture_pending" | "buyer_approval_pending"
```