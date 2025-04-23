# UserStatus

## Example Usage

```typescript
import { UserStatus } from "@gr4vy/sdk/models/components";

let value: UserStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "pending" | "deleted" | Unrecognized<string>
```