# AVSResponseCode

## Example Usage

```typescript
import { AVSResponseCode } from "@gr4vy/sdk/models/components";

let value: AVSResponseCode = "match";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"match" | "no_match" | "partial_match_address" | "partial_match_postcode" | "unavailable" | Unrecognized<string>
```