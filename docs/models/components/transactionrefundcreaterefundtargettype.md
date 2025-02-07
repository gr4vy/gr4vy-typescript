# TransactionRefundCreateRefundTargetType

The target type to refund for. This can be used to target a gift card to refund to instead of the main payment method.

## Example Usage

```typescript
import { TransactionRefundCreateRefundTargetType } from "@gr4vy/sdk/models/components";

let value: TransactionRefundCreateRefundTargetType = "payment-method";
```

## Values

```typescript
"payment-method" | "gift-card-redemption"
```