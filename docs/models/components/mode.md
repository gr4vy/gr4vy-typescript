# Mode

## Example Usage

```typescript
import { Mode } from "@gr4vy/sdk/models/components";

let value: Mode = "card";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"card" | "redirect" | "applepay" | "googlepay" | "checkout-session" | "click-to-pay" | "gift-card" | "bank" | Unrecognized<string>
```