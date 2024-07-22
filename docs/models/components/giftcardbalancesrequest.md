# GiftCardBalancesRequest

A request to check the balance for a set of stored and
non-stored gift cards.


## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                             | *components.GiftCardBalancesRequestItems*[]                                                                                         | :heavy_minus_sign:                                                                                                                  | One or more gift cards to check balances for, up to a default limit<br/>of 10 gift cards. Please contact our team to change this limit. |