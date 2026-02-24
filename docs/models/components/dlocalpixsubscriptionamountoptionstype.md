# DlocalPIXSubscriptionAmountOptionsType

Indicates the amount type unit for the subscription. Allowed values are: `FIXED`, `VARIABLE`.

## Example Usage

```typescript
import { DlocalPIXSubscriptionAmountOptionsType } from "@gr4vy/sdk/models/components";

let value: DlocalPIXSubscriptionAmountOptionsType = "FIXED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"FIXED" | "VARIABLE" | Unrecognized<string>
```