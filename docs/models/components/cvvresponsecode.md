# CVVResponseCode

## Example Usage

```typescript
import { CVVResponseCode } from "@gr4vy/sdk/models/components";

let value: CVVResponseCode = "match";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"match" | "no_match" | "unavailable" | "not_provided" | Unrecognized<string>
```