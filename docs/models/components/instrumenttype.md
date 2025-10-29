# InstrumentType

## Example Usage

```typescript
import { InstrumentType } from "@gr4vy/sdk/models/components";

let value: InstrumentType = "pan";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pan" | "card_token" | "redirect" | "redirect_token" | "googlepay" | "applepay" | "network_token" | "plaid" | Unrecognized<string>
```