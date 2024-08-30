# TransactionIntent

The original `intent` used when the transaction was
[created](#operation/authorize-new-transaction).

## Example Usage

```typescript
import { TransactionIntent } from "@gr4vy/sdk/models/components";

let value: TransactionIntent = "authorize";
```

## Values

```typescript
"authorize" | "capture"
```