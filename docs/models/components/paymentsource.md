# PaymentSource

The source of the transaction. Defaults to `ecommerce`.

## Example Usage

```typescript
import { PaymentSource } from "@gr4vy/sdk/models/components";

let value: PaymentSource = "recurring";
```

## Values

```typescript
"ecommerce" | "moto" | "recurring" | "installment" | "card_on_file"
```