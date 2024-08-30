# TransactionPaymentSource

The source of the transaction. Defaults to `ecommerce`.

## Example Usage

```typescript
import { TransactionPaymentSource } from "@gr4vy/sdk/models/components";

let value: TransactionPaymentSource = "recurring";
```

## Values

```typescript
"ecommerce" | "moto" | "recurring" | "installment" | "card_on_file"
```