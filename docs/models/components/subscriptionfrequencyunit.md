# SubscriptionFrequencyUnit

Indicates the frequency unit for the subscription. Allowed values are: `DAILY`, `WEEKLY`, `MONTHLY`, `QUARTERLY`, `SEMI_ANNUAL`, and `ANNUAL`.

## Example Usage

```typescript
import { SubscriptionFrequencyUnit } from "@gr4vy/sdk/models/components";

let value: SubscriptionFrequencyUnit = "MONTHLY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DAILY" | "WEEKLY" | "MONTHLY" | "QUARTERLY" | "SEMI_ANNUAL" | "ANNUAL" | Unrecognized<string>
```