# ErrorLocation

## Example Usage

```typescript
import { ErrorLocation } from "@gr4vy/sdk/models/components";

let value: ErrorLocation = "body";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"query" | "body" | "path" | "header" | "unknown" | Unrecognized<string>
```