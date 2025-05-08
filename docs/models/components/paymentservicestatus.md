# PaymentServiceStatus

## Example Usage

```typescript
import { PaymentServiceStatus } from "@gr4vy/sdk/models/components";

let value: PaymentServiceStatus = "created";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "created" | "failed" | Unrecognized<string>
```