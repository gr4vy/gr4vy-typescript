# Mode

## Example Usage

```typescript
import { Mode } from "@gr4vy/sdk/models/components";

let value: Mode = "card";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"card" | "redirect" | "applepay" | "googlepay" | "checkout-session" | "click-to-pay" | "gift-card" | "bank" | Unrecognized<string>
```