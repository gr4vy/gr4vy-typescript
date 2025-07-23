# CaptureStatus

## Example Usage

```typescript
import { CaptureStatus } from "@gr4vy/sdk/models/components";

let value: CaptureStatus = "failed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"succeeded" | "pending" | "declined" | "failed" | Unrecognized<string>
```