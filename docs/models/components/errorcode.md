# ErrorCode

If this gift card redemption resulted in an error, this will
contain the internal code for the error.

## Example Usage

```typescript
import { ErrorCode } from "@gr4vy/sdk/models/components";

let value: ErrorCode = "expired_card";
```

## Values

```typescript
"expired_card" | "inactive_card" | "incorrect_currency" | "insufficient_funds" | "invalid_amount" | "invalid_gift_card" | "invalid_service_configuration" | "invalid_service_credentials" | "operation_canceled" | "service_error" | "service_network_error" | "unknown_error"
```