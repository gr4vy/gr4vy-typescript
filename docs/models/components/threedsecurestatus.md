# ThreeDSecureStatus

The status of the 3DS challenge for this transaction.

## Example Usage

```typescript
import { ThreeDSecureStatus } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureStatus = "complete";
```

## Values

```typescript
"setup_error" | "error" | "declined" | "cancelled" | "complete"
```