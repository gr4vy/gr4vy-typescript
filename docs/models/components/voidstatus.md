# VoidStatus

## Example Usage

```typescript
import { VoidStatus } from "@gr4vy/sdk/models/components";

let value: VoidStatus = "declined";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"succeeded" | "pending" | "declined" | "failed" | Unrecognized<string>
```