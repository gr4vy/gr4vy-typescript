# TransactionStatus

The status of the transaction for the `payment_method`. The status
may change over time as asynchronous processing events occur.

Please note that the possible statuses returned will depend on the
operation performed. For example, a captured transaction will never
move to a `authorization_voided` status.


## Values

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `Processing`               | processing                 |
| `BuyerApprovalPending`     | buyer_approval_pending     |
| `AuthorizationSucceeded`   | authorization_succeeded    |
| `AuthorizationFailed`      | authorization_failed       |
| `AuthorizationDeclined`    | authorization_declined     |
| `CapturePending`           | capture_pending            |
| `CaptureSucceeded`         | capture_succeeded          |
| `AuthorizationVoidPending` | authorization_void_pending |
| `AuthorizationVoided`      | authorization_voided       |