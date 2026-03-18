# InstrumentType

## Example Usage

```typescript
import { InstrumentType } from "@gr4vy/sdk/models/components";

let value: InstrumentType = "pan";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pan" | "card_token" | "redirect" | "redirect_token" | "googlepay" | "applepay" | "network_token" | "plaid" | "bank" | Unrecognized<string>
```