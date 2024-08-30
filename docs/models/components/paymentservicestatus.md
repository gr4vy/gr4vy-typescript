# PaymentServiceStatus

The current status of this service. This will start off as pending, move
to created, and might eventually move to an error status if and when the
credentials are no longer valid.


## Example Usage

```typescript
import { PaymentServiceStatus } from "@gr4vy/sdk/models/components";

let value: PaymentServiceStatus = "created";
```

## Values

```typescript
"pending" | "created" | "failed"
```