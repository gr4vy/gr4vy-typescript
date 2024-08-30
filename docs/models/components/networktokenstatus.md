# NetworkTokenStatus

The state of the network token.

- `active` - The network token is active and ready to be used.
- `inactive` - The network token is being deactivated.
- `suspended` - The network token is suspended.
- `deleted` - The network token is deleted.

## Example Usage

```typescript
import { NetworkTokenStatus } from "@gr4vy/sdk/models/components";

let value: NetworkTokenStatus = "active";
```

## Values

```typescript
"active" | "inactive" | "suspended" | "deleted"
```