# TransactionRequestDeliveryType

Value to populate the `deliveryType` field for this cart item. This overrides
the type set at the wider level.

Represents the type of delivery. This can be set to `PHYSICAL` for any
type of shipped goods, `DIGITAL` for non-shipped goods (services,
gift cards etc.), or `HYBRID` for others.

## Example Usage

```typescript
import { TransactionRequestDeliveryType } from "@gr4vy/sdk/models/components";

let value: TransactionRequestDeliveryType = "PHYSICAL";
```

## Values

```typescript
"PHYSICAL" | "DIGITAL" | "HYBRID"
```