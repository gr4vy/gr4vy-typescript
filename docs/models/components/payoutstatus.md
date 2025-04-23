# PayoutStatus

## Example Usage

```typescript
import { PayoutStatus } from "@gr4vy/sdk/models/components";

let value: PayoutStatus = "declined";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"declined" | "failed" | "pending" | "succeeded" | Unrecognized<string>
```