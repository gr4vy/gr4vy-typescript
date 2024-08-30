# ResponseDataAuthenticationResponse

The transaction status after a the 3DS challenge. This will
be null in case of a frictionless 3DS flow.

## Example Usage

```typescript
import { ResponseDataAuthenticationResponse } from "@gr4vy/sdk/models/components";

let value: ResponseDataAuthenticationResponse = "Y";
```

## Values

```typescript
"Y" | "A" | "N" | "R" | "U"
```