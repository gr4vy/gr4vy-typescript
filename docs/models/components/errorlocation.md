# ErrorLocation

## Example Usage

```typescript
import { ErrorLocation } from "@gr4vy/sdk/models/components";

let value: ErrorLocation = "body";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"query" | "body" | "path" | "header" | "unknown" | Unrecognized<string>
```