# RetryRule

Defines why the transaction might be retried. A retry is not guaranteed because
the maximum number of retries might already have been attempted.

* `failure` - the transaction will be retried because of a failure calling
  the payment service.
* `retriable_decline` - the transaction will be retried because a decline code
  was received that can be retried.
* `payment_method_replacement` - the transaction will be retried because a
  decline code was received that triggered a payment method replacement.


## Values

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `Failure`                  | failure                    |
| `RetriableDecline`         | retriable_decline          |
| `PaymentMethodReplacement` | payment_method_replacement |