# Flow

## Example Usage

```typescript
import { Flow } from "@gr4vy/sdk/models/components";

let value: Flow = "checkout";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"checkout" | "card-transaction" | "non-card-transaction" | "redirect-transaction" | Unrecognized<string>
```