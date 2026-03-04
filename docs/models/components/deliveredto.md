# DeliveredTo

## Example Usage

```typescript
import { DeliveredTo } from "@gr4vy/sdk/models/components";

let value: DeliveredTo = "shipping_address";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"shipping_address" | "store_pickup" | Unrecognized<string>
```