# DeliveryType

Value to populate the `deliveryType` field in `primaryDeliveryDetails`.

Represents the type of delivery. This can be set to `PHYSICAL` for any
type of shipped goods, `DIGITAL` for non-shipped goods (services,
gift cards etc.), or `HYBRID` for others.

## Example Usage

```typescript
import { DeliveryType } from "@gr4vy/sdk/models/components";

let value: DeliveryType = "DIGITAL";
```

## Values

```typescript
"PHYSICAL" | "DIGITAL" | "HYBRID"
```