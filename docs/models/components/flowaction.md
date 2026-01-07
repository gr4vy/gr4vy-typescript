# FlowAction

## Example Usage

```typescript
import { FlowAction } from "@gr4vy/sdk/models/components";

let value: FlowAction = "select-payment-options";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"select-payment-options" | "route-transaction" | "decline-early" | "skip-3ds" | Unrecognized<string>
```