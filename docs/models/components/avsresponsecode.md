# AVSResponseCode

The response code received from the payment service for the Address Verification Check (AVS). This code is mapped to a standardized Gr4vy AVS response code.

## Example Usage

```typescript
import { AVSResponseCode } from "@gr4vy/sdk/models/components";

let value: AVSResponseCode = "match";
```

## Values

```typescript
"match" | "no_match" | "partial_match_address" | "partial_match_postcode" | "unavailable"
```