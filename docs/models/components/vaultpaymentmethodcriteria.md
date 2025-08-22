# VaultPaymentMethodCriteria

## Example Usage

```typescript
import { VaultPaymentMethodCriteria } from "@gr4vy/sdk/models/components";

let value: VaultPaymentMethodCriteria = "ON_SUCCESSFUL_TRANSACTION";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ALWAYS" | "ON_SUCCESSFUL_TRANSACTION" | Unrecognized<string>
```