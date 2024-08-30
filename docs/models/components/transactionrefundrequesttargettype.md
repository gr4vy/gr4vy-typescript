# TransactionRefundRequestTargetType

The target type to refund for. This can be used to target a gift card
to refund to instead of the main payment method.

## Example Usage

```typescript
import { TransactionRefundRequestTargetType } from "@gr4vy/sdk/models/components";

let value: TransactionRefundRequestTargetType = "gift-card-redemption";
```

## Values

```typescript
"payment-method" | "gift-card-redemption"
```