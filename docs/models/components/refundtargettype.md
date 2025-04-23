# RefundTargetType

## Example Usage

```typescript
import { RefundTargetType } from "@gr4vy/sdk/models/components";

let value: RefundTargetType = "gift-card-redemption";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"payment-method" | "gift-card-redemption" | Unrecognized<string>
```