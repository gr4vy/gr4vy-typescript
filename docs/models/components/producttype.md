# ProductType

## Example Usage

```typescript
import { ProductType } from "@gr4vy/sdk/models/components";

let value: ProductType = "physical";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"physical" | "discount" | "shipping_fee" | "sales_tax" | "digital" | "gift_card" | "store_credit" | "surcharge" | Unrecognized<string>
```