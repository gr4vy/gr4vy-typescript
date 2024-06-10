# PaypalPaypalpaylater

Additional options to be passed through to PayPal when processing
transactions.


## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `additionalData`                                                                                             | [components.TransactionRequestAdditionalData](../../models/components/transactionrequestadditionaldata.md)[] | :heavy_minus_sign:                                                                                           | An array with key-value objects representing additional<br/>data to be passed to PayPal.                     | [<br/>{<br/>"key": "test",<br/>"value": "abc"<br/>}<br/>]                                                    |