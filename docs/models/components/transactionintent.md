# TransactionIntent

## Example Usage

```typescript
import { TransactionIntent } from "@gr4vy/sdk/models/components";

let value: TransactionIntent = "authorize";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"authorize" | "capture" | Unrecognized<string>
```