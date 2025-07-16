# DeliveryType

## Example Usage

```typescript
import { DeliveryType } from "@gr4vy/sdk/models/components";

let value: DeliveryType = "DIGITAL";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DIGITAL" | "PHYSICAL" | "HYBRID" | Unrecognized<string>
```