# PaymentConnectorResponseTransactionCaptureDeclinedEventCvvResponseCode

The response code received from the payment service for the Card
Verification Value (CVV). This code is mapped to a standardized Gr4vy
CVV response code.

- `no_match` - the CVV does not match the expected value
- `match` - the CVV matches the expected value
- `unavailable ` - CVV check unavailable for card our country
- `not_provided ` - CVV not provided

The value of this field can be `null` if the payment service did not
provide a response.


## Values

| Name          | Value         |
| ------------- | ------------- |
| `NoMatch`     | no_match      |
| `Match`       | match         |
| `Unavailable` | unavailable   |