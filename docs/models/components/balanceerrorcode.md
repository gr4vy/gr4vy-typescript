# BalanceErrorCode

If the last balance update failed, this will contain the
internal code for this error.

## Example Usage

```typescript
import { BalanceErrorCode } from "@gr4vy/sdk/models/components";

let value: BalanceErrorCode = "incorrect_currency";
```

## Values

```typescript
"expired_card" | "inactive_card" | "incorrect_currency" | "insufficient_funds" | "invalid_amount" | "invalid_gift_card" | "invalid_service_configuration" | "invalid_service_credentials" | "operation_canceled" | "service_error" | "service_network_error" | "unknown_error"
```