# ConnectionOptions

Allows for passing optional configuration per connection to take
advantage of connection specific features. When provided, the data
is only passed to the target connection type to prevent sharing
configuration across connections.

Please note that each of the keys this object are in kebab-case, for
example `cybersource-anti-fraud` as they represent the ID of the
connector. All the other keys will be snake case, for example
`merchant_defined_data` or camel case to match an external API that the
connector uses.


## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `cybersourceCard`                                                                      | [components.CybersourceCard](../../models/components/cybersourcecard.md)               | :heavy_minus_sign:                                                                     | Additional options for Cybersource payment gateway.                                    |
| `cybersourceAntiFraud`                                                                 | [components.CybersourceAntiFraud](../../models/components/cybersourceantifraud.md)     | :heavy_minus_sign:                                                                     | Additional options for Cybersource Decision Manager (anti-fraud).                      |
| `givingblockGivingblock`                                                               | [components.GivingblockGivingblock](../../models/components/givingblockgivingblock.md) | :heavy_minus_sign:                                                                     | Additional options for Giving Block connector.                                         |
| `forterAntiFraud`                                                                      | [components.ForterAntiFraud](../../models/components/forterantifraud.md)               | :heavy_minus_sign:                                                                     | Additional options for Forter (anti-fraud).                                            |
| `adyenCard`                                                                            | [components.AdyenCard](../../models/components/adyencard.md)                           | :heavy_minus_sign:                                                                     | Additional options to be passed through to Adyen when processing<br/>card transactions. |
| `paypalPaypal`                                                                         | [components.PaypalPaypal](../../models/components/paypalpaypal.md)                     | :heavy_minus_sign:                                                                     | Additional options to be passed through to PayPal when processing<br/>transactions.    |
| `paypalPaypalpaylater`                                                                 | [components.PaypalPaypalpaylater](../../models/components/paypalpaypalpaylater.md)     | :heavy_minus_sign:                                                                     | Additional options to be passed through to PayPal when processing<br/>transactions.    |
| `stripeCard`                                                                           | [components.StripeCard](../../models/components/stripecard.md)                         | :heavy_minus_sign:                                                                     | Additional options to be passed through to Stripe when processing<br/>transactions.    |