# PaymentSource

The use-case for the the transaction.

## Example Usage

```typescript
import { PaymentSource } from "@gr4vy/sdk/models/components";

let value: PaymentSource = "ecommerce";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ecommerce" | "moto" | "recurring" | "installment" | "card_on_file" | Unrecognized<string>
```