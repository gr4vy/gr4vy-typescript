# CancelStatus

## Example Usage

```typescript
import { CancelStatus } from "@gr4vy/sdk/models/components";

let value: CancelStatus = "failed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"succeeded" | "pending" | "failed" | Unrecognized<string>
```