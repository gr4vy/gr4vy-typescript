# TransactionStatus

The status of the transaction for the `payment_method`. The status
may change over time as asynchronous processing events occur.

Please note that the possible statuses returned will depend on the
operation performed. For example, a captured transaction will never
move to a `authorization_voided` status.

## Example Usage

```typescript
import { TransactionStatus } from "@gr4vy/sdk/models/components";

let value: TransactionStatus = "processing";
```

## Values

```typescript
"processing" | "buyer_approval_pending" | "authorization_succeeded" | "authorization_failed" | "authorization_declined" | "capture_pending" | "capture_succeeded" | "authorization_void_pending" | "authorization_voided"
```