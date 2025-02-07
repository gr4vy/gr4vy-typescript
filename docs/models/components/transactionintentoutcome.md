# TransactionIntentOutcome

The outcome of the original intent of a transaction. This allows you to understand if the intent of the transaction (e.g. `capture` or `authorize`) has been achieved when dealing with multiple payment instruments.

## Example Usage

```typescript
import { TransactionIntentOutcome } from "@gr4vy/sdk/models/components";

let value: TransactionIntentOutcome = "succeeded";
```

## Values

```typescript
"pending" | "succeeded" | "failed"
```