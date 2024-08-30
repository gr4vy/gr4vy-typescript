# Status

The state of the payment method.

- `processing` - The payment method is stored but is not ready to be
   used yet, as we may be waiting for a notification from a connector
   to complete the setup.
- `buyer_approval_required` - Storing the payment method requires
  the buyer to provide approval. Follow the `approval_url` for next steps.
- `succeeded` - The payment method is stored and can be used.
- `failed` - The payment method could not be stored, or failed verification.

## Example Usage

```typescript
import { Status } from "@gr4vy/sdk/models/components";

let value: Status = "succeeded";
```

## Values

```typescript
"processing" | "buyer_approval_required" | "succeeded" | "failed"
```