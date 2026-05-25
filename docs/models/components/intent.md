# Intent

Primary intent of the checkout session.

## Example Usage

```typescript
import { Intent } from "@gr4vy/sdk/models/components";

let value: Intent = "EXPRESS_CHECKOUT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"REVIEW_AND_PAY" | "EXPRESS_CHECKOUT" | "ADD_CARD" | Unrecognized<string>
```