# Frequency

Indicates the frequency unit for the subscription. Allowed values are: `WEEKLY`, `MONTHLY`, `QUARTERLY`, `SEMI_ANNUAL`, `ANNUAL`.

## Example Usage

```typescript
import { Frequency } from "@gr4vy/sdk/models/components";

let value: Frequency = "WEEKLY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"WEEKLY" | "MONTHLY" | "QUARTERLY" | "SEMI_ANNUAL" | "ANNUAL" | Unrecognized<string>
```