# GiftCardErrorCode

If the last balance update failed, this will contain the internal code for this error.

## Example Usage

```typescript
import { GiftCardErrorCode } from "@gr4vy/sdk/models/components";

let value: GiftCardErrorCode = "incorrect_currency";
```

## Values

```typescript
"invalid_gift_card" | "expired_card" | "inactive_card" | "invalid_service_credentials" | "invalid_amount" | "incorrect_currency" | "insufficient_funds" | "invalid_service_configuration" | "operation_canceled" | "service_error" | "service_network_error" | "unknown_error"
```