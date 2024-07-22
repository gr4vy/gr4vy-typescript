# StripeCard

Additional options to be passed through to Stripe when processing
transactions.


## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `errorOnRequiresAction`                                                                                         | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | Defines if Stripe should automatically fail the payment if it<br/>requires two-factor authentication from the user. |
| `stripeConnect`                                                                                                 | [components.StripeConnect](../../models/components/stripeconnect.md)                                            | :heavy_minus_sign:                                                                                              | Stripe Connect configuration options.                                                                           |