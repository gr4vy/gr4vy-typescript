# SubscriptionFrequencyUnit

Indicates the frequency unit for the subscription. Allowed values are: `DAY`, `WEEK`, `MONTH`, `BI_MONTHLY`, `QUARTER`, `SEMI_ANNUALLY`, `YEAR`, `ONDEMAND`.

## Example Usage

```typescript
import { SubscriptionFrequencyUnit } from "@gr4vy/sdk/models/components";

let value: SubscriptionFrequencyUnit = "MONTH";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"MONTH" | "WEEK" | "BI_MONTHLY" | "ONDEMAND" | "QUARTER" | "YEAR" | "SEMI_ANNUALLY" | "DAY" | Unrecognized<string>
```