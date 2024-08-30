# TransactionPaymentSource

The way payment method information made it to this transaction.

## Example Usage

```typescript
import { TransactionPaymentSource } from "@gr4vy/sdk/models/components";

let value: TransactionPaymentSource = "ecommerce";
```

## Values

```typescript
"ecommerce" | "moto" | "recurring" | "installment" | "card_on_file"
```