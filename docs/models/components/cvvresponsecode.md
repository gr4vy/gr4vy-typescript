# CVVResponseCode

The response code received from the payment service for the Card Verification Value (CVV). This code is mapped to a standardized Gr4vy CVV response code.

## Example Usage

```typescript
import { CVVResponseCode } from "@gr4vy/sdk/models/components";

let value: CVVResponseCode = "match";
```

## Values

```typescript
"match" | "no_match" | "unavailable" | "not_provided"
```