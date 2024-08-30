# PaymentConnectorResponseTransactionAuthorizationSucceededEventAvsResponseCode

The response code received from the payment service for the Address
Verification Check (AVS). This code is mapped to a standardized Gr4vy
AVS response code.

- `no_match` - neither address or postal code match
- `match` - both address and postal code match
- `partial_match_address` - address matches but postal code does not
- `partial_match_postcode` - postal code matches but address does not
- `unavailable ` - AVS is unavailable for card/country

The value of this field can be `null` if the payment service did not
provide a response.

## Example Usage

```typescript
import { PaymentConnectorResponseTransactionAuthorizationSucceededEventAvsResponseCode } from "@gr4vy/sdk/models/components";

let value: PaymentConnectorResponseTransactionAuthorizationSucceededEventAvsResponseCode =
    "partial_match_address";
```

## Values

```typescript
"no_match" | "match" | "partial_match_address" | "partial_match_postcode" | "unavailable"
```