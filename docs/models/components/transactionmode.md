# TransactionMode

The mode to use with this payment method.

## Example Usage

```typescript
import { TransactionMode } from "@gr4vy/sdk/models/components";

let value: TransactionMode = "card";
```

## Values

```typescript
"card" | "redirect" | "applepay" | "googlepay" | "checkout-session" | "click-to-pay" | "gift-card"
```