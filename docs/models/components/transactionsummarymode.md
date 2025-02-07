# TransactionSummaryMode

The mode to use with this payment method.

## Example Usage

```typescript
import { TransactionSummaryMode } from "@gr4vy/sdk/models/components";

let value: TransactionSummaryMode = "card";
```

## Values

```typescript
"card" | "redirect" | "applepay" | "googlepay" | "checkout-session" | "click-to-pay" | "gift-card"
```