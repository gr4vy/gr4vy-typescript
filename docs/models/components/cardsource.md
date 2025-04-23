# CardSource

## Example Usage

```typescript
import { CardSource } from "@gr4vy/sdk/models/components";

let value: CardSource = "apple-pay";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"apple-pay" | "google-pay" | Unrecognized<string>
```