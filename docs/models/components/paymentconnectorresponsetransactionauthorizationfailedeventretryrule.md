# PaymentConnectorResponseTransactionAuthorizationFailedEventRetryRule

Defines why the transaction might be retried. A retry is not guaranteed because
the maximum number of retries might already have been attempted.

* `failure` - the transaction will be retried because of a failure calling
  the payment service.
* `retriable_decline` - the transaction will be retried because a decline code
  was received that can be retried.
* `payment_method_replacement` - the transaction will be retried because a
  decline code was received that triggered a payment method replacement.

## Example Usage

```typescript
import { PaymentConnectorResponseTransactionAuthorizationFailedEventRetryRule } from "@gr4vy/sdk/models/components";

let value: PaymentConnectorResponseTransactionAuthorizationFailedEventRetryRule = "failure";
```

## Values

```typescript
"failure" | "retriable_decline" | "payment_method_replacement"
```