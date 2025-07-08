# PaymentLinkCreatePaymentSource

The payment source for the payment link.

## Example Usage

```typescript
import { PaymentLinkCreatePaymentSource } from "@gr4vy/sdk/models/components";

let value: PaymentLinkCreatePaymentSource = "ecommerce";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ecommerce" | "moto" | "recurring" | "installment" | "card_on_file" | Unrecognized<string>
```