# PaymentServiceTokenStatus

The state of the token.

- `processing` - The payment method is still being stored.
- `buyer_approval_required` - Storing the payment method requires
  the buyer to provide approval. Follow the `approval_url` for next steps.
- `succeeded` - The payment method is approved and stored with all
  relevant payment services.
- `failed` - Storing the payment method did not succeed.

## Example Usage

```typescript
import { PaymentServiceTokenStatus } from "@gr4vy/sdk/models/components";

let value: PaymentServiceTokenStatus = "succeeded";
```

## Values

```typescript
"processing" | "buyer_approval_required" | "succeeded" | "failed"
```