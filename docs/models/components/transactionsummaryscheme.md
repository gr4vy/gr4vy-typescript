# TransactionSummaryScheme

An additional label used to differentiate different sub-types of a payment
method. Most notably this can include the type of card used in a
transaction. This field is `null` for the non-card payment methods.
This represents the card scheme sent to the connector and it could be different from the
actual card scheme that is being used by the PSP to process the transaction
in the following situations: 1. `use_additional_scheme` transformation is used
with the `PAN` instrument but we already have a PSP token for the card.
2. `use_additional_scheme` transformation is used but PSP has fallen back to the
main card scheme internally.

## Example Usage

```typescript
import { TransactionSummaryScheme } from "@gr4vy/sdk/models/components";

let value: TransactionSummaryScheme = "visa";
```

## Values

```typescript
"accel" | "amex" | "bancontact" | "carte-bancaire" | "cirrus" | "culiance" | "dankort" | "diners-club" | "discover" | "eftpos-australia" | "elo" | "hipercard" | "jcb" | "maestro" | "mastercard" | "mir" | "nyce" | "other" | "pulse" | "rupay" | "star" | "uatp" | "unionpay" | "visa"
```