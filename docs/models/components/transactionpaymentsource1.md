# TransactionPaymentSource1

The source of the transaction.

## Example Usage

```typescript
import { TransactionPaymentSource1 } from "@gr4vy/sdk/models/components";

let value: TransactionPaymentSource1 = "ecommerce";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ecommerce" | "moto" | "recurring" | "installment" | "card_on_file" | Unrecognized<string>
```