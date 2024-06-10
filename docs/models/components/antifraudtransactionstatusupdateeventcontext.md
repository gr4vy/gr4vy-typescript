# AntiFraudTransactionStatusUpdateEventContext

Additional context for this event.


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `antiFraudServiceId`                                        | *string*                                                    | :heavy_minus_sign:                                          | The unique ID of the anti-fraud service used.               |
| `antiFraudServiceName`                                      | *string*                                                    | :heavy_minus_sign:                                          | The name of the anti-fraud service used.                    |
| `antiFraudServiceDefinitionId`                              | *string*                                                    | :heavy_minus_sign:                                          | The anti-fraud service definition used.                     |
| `request`                                                   | *string*                                                    | :heavy_minus_sign:                                          | The HTTP body sent to fetch a decision.                     |
| `response`                                                  | *string*                                                    | :heavy_minus_sign:                                          | The HTTP body received from the anti-fraud provider.        |
| `responseStatusCode`                                        | *number*                                                    | :heavy_minus_sign:                                          | The HTTP response status code from the anti-fraud provider. |