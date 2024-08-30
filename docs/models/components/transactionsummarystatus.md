# TransactionSummaryStatus

The status of the transaction. The status may change over time as
asynchronous processing events occur.

## Example Usage

```typescript
import { TransactionSummaryStatus } from "@gr4vy/sdk/models/components";

let value: TransactionSummaryStatus = "processing";
```

## Values

```typescript
"processing" | "buyer_approval_pending" | "authorization_succeeded" | "authorization_failed" | "authorization_declined" | "capture_pending" | "capture_succeeded" | "authorization_void_pending" | "authorization_voided"
```