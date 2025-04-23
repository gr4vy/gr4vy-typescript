# TicketDeliveryMethod

## Example Usage

```typescript
import { TicketDeliveryMethod } from "@gr4vy/sdk/models/components";

let value: TicketDeliveryMethod = "electronic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"electronic" | "other" | Unrecognized<string>
```