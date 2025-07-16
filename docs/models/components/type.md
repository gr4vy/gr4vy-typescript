# Type

## Example Usage

```typescript
import { Type } from "@gr4vy/sdk/models/components";

let value: Type = "TANGIBLE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TANGIBLE" | "NON_TANGIBLE" | Unrecognized<string>
```