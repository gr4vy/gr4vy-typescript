# FlowAction

## Example Usage

```typescript
import { FlowAction } from "@gr4vy/sdk/models/components";

let value: FlowAction = "select-payment-options";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"select-payment-options" | "route-transaction" | "decline-early" | "skip-3ds" | Unrecognized<string>
```