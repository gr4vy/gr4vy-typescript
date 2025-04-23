# ThreeDSecureStatus

## Example Usage

```typescript
import { ThreeDSecureStatus } from "@gr4vy/sdk/models/components";

let value: ThreeDSecureStatus = "complete";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"setup_error" | "error" | "declined" | "cancelled" | "complete" | Unrecognized<string>
```