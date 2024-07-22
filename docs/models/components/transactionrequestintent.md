# TransactionRequestIntent

Defines the intent of this API call. This determines the desired initial
state of the transaction.

* `authorize` - (Default) Optionally approves and then authorizes a
transaction but does not capture the funds.
* `capture` - Optionally approves and then authorizes and captures the
funds of the transaction.


## Values

| Name        | Value       |
| ----------- | ----------- |
| `Authorize` | authorize   |
| `Capture`   | capture     |