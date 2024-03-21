# FlowAmountRangeConditionValue

Amount value compare the transaction to.


## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `currency`                                        | *string*                                          | :heavy_minus_sign:                                | Currency ISO codes to compare the transaction to. | USD                                               |
| `min`                                             | *number*                                          | :heavy_minus_sign:                                | Minimum value to compare transaction value to.    | 1                                                 |
| `max`                                             | *number*                                          | :heavy_minus_sign:                                | Maximum value to compare transaction value to.    | 200                                               |