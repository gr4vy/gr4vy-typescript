# PaymentMethodDetailsCard

A credit or debit card payment method.


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `cardType`                                                 | [components.CardType](../../models/components/cardtype.md) | :heavy_minus_sign:                                         | The type of card, one of `credit`, `debit` or `prepaid`.   | credit                                                     |
| `bin`                                                      | *string*                                                   | :heavy_minus_sign:                                         | The first 6 digits of the full card number (the BIN).      | 412345                                                     |