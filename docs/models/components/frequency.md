# Frequency

Indicates the frequency unit for the subscription. Allowed values are: `WEEKLY`, `MONTHLY`, `QUARTERLY`, `SEMI_ANNUAL`, `ANNUAL`.

## Example Usage

```typescript
import { Frequency } from "@gr4vy/sdk/models/components";

let value: Frequency = "WEEKLY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"WEEKLY" | "MONTHLY" | "QUARTERLY" | "SEMI_ANNUAL" | "ANNUAL" | Unrecognized<string>
```