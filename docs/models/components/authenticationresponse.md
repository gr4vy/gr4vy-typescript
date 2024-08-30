# AuthenticationResponse

The transaction status after a the 3DS challenge. This will
be null in case of a frictionless 3DS flow.

## Example Usage

```typescript
import { AuthenticationResponse } from "@gr4vy/sdk/models/components";

let value: AuthenticationResponse = "Y";
```

## Values

```typescript
"Y" | "A" | "N" | "R" | "U"
```