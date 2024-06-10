# AssuranceDetails

Information about the validation performed on the payment data. (See https://developers.google.com/pay/api/web/reference/response-objects#assurance-details-specifications).


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountVerified`                                                    | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates that card holder possession validation has been performed. | false                                                                |
| `cardHolderAuthenticated`                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | Indicates that identification and verifications was performed.       | false                                                                |