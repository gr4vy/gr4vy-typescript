# NetworkTokenStatus

## Example Usage

```typescript
import { NetworkTokenStatus } from "@gr4vy/sdk/models/components";

let value: NetworkTokenStatus = "deleted";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | "suspended" | "deleted" | Unrecognized<string>
```