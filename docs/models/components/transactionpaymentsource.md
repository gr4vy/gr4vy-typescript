# TransactionPaymentSource

The way payment method information made it to this transaction.

## Example Usage

```typescript
import { TransactionPaymentSource } from "@gr4vy/sdk/models/components";

let value: TransactionPaymentSource = "installment";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ecommerce" | "moto" | "recurring" | "installment" | "card_on_file" | Unrecognized<string>
```