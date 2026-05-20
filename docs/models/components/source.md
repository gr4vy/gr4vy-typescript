# Source

The platform that the Paze session is being created for. Defaults to `web`.

## Example Usage

```typescript
import { Source } from "@gr4vy/sdk/models/components";

let value: Source = "web";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"web" | "mobile" | Unrecognized<string>
```