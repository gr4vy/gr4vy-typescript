# SubscriptionFrequencyUnit

Indicates the frequency unit for the subscription. Allowed values are: `DAY`, `WEEK`, `MONTH`, `BI_MONTHLY`, `QUARTER`, `SEMI_ANNUALLY`, `YEAR`, `ONDEMAND`.

## Example Usage

```typescript
import { SubscriptionFrequencyUnit } from "@gr4vy/sdk/models/components";

let value: SubscriptionFrequencyUnit = "MONTH";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MONTH" | "WEEK" | "BI_MONTHLY" | "ONDEMAND" | "QUARTER" | "YEAR" | "SEMI_ANNUALLY" | "DAY" | Unrecognized<string>
```