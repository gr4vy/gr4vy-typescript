# PayoutStatus

## Example Usage

```typescript
import { PayoutStatus } from "@gr4vy/sdk/models/components";

let value: PayoutStatus = "declined";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"declined" | "failed" | "pending" | "succeeded" | Unrecognized<string>
```