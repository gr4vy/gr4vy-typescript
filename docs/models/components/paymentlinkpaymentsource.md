# PaymentLinkPaymentSource

The payment source for the payment link.

## Example Usage

```typescript
import { PaymentLinkPaymentSource } from "@gr4vy/sdk/models/components";

let value: PaymentLinkPaymentSource = "ecommerce";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ecommerce" | "moto" | "recurring" | "installment" | "card_on_file" | Unrecognized<string>
```