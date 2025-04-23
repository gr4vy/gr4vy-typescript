# TransactionIntentOutcome

## Example Usage

```typescript
import { TransactionIntentOutcome } from "@gr4vy/sdk/models/components";

let value: TransactionIntentOutcome = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "succeeded" | "failed" | Unrecognized<string>
```