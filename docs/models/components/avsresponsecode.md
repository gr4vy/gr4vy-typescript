# AVSResponseCode

## Example Usage

```typescript
import { AVSResponseCode } from "@gr4vy/sdk/models/components";

let value: AVSResponseCode = "match";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"match" | "no_match" | "partial_match_address" | "partial_match_postcode" | "partial_match_name" | "unavailable" | Unrecognized<string>
```