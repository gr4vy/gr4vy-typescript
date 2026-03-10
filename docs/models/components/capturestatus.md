# CaptureStatus

## Example Usage

```typescript
import { CaptureStatus } from "@gr4vy/sdk/models/components";

let value: CaptureStatus = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"succeeded" | "pending" | "declined" | "failed" | Unrecognized<string>
```