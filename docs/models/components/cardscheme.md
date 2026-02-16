# CardScheme

## Example Usage

```typescript
import { CardScheme } from "@gr4vy/sdk/models/components";

let value: CardScheme = "visa";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"accel" | "amex" | "bancontact" | "carte-bancaire" | "cirrus" | "culiance" | "dankort" | "diners-club" | "discover" | "eftpos-australia" | "elo" | "hipercard" | "jcb" | "maestro" | "mastercard" | "mir" | "nyce" | "other" | "pulse" | "qcard" | "rupay" | "star" | "uatp" | "unionpay" | "visa" | Unrecognized<string>
```