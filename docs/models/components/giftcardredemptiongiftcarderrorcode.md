# GiftCardRedemptionGiftCardErrorCode

If this gift card redemption resulted in an error, this will contain the internal code for the error.

## Example Usage

```typescript
import { GiftCardRedemptionGiftCardErrorCode } from "@gr4vy/sdk/models/components";

let value: GiftCardRedemptionGiftCardErrorCode = "expired_card";
```

## Values

```typescript
"invalid_gift_card" | "expired_card" | "inactive_card" | "invalid_service_credentials" | "invalid_amount" | "incorrect_currency" | "insufficient_funds" | "invalid_service_configuration" | "operation_canceled" | "service_error" | "service_network_error" | "unknown_error"
```