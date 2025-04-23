# GiftCardRedemptionStatus

## Example Usage

```typescript
import { GiftCardRedemptionStatus } from "@gr4vy/sdk/models/components";

let value: GiftCardRedemptionStatus = "created";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created" | "succeeded" | "failed" | "skipped" | Unrecognized<string>
```