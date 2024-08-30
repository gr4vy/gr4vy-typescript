# RefundStatus

The status of the refund.
It may change over time as asynchronous processing events occur.

- `processing` - The refund is being processed.
- `succeeded` - The refund was successful.
- `declined` - The refund was declined by the underlying PSP.
- `failed` - The refund could not proceed due to a technical issue.
- `voided` - The refund was voided and will not proceed.

## Example Usage

```typescript
import { RefundStatus } from "@gr4vy/sdk/models/components";

let value: RefundStatus = "processing";
```

## Values

```typescript
"processing" | "succeeded" | "declined" | "failed" | "voided"
```