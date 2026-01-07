# Flow

## Example Usage

```typescript
import { Flow } from "@gr4vy/sdk/models/components";

let value: Flow = "checkout";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"checkout" | "card-transaction" | "non-card-transaction" | "redirect-transaction" | Unrecognized<string>
```