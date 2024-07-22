# GiftCardRefundSucceededContext

Additional context for this event.


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `giftCardServiceId`                                        | *string*                                                   | :heavy_minus_sign:                                         | The unique ID of the Gift Card service used.               |
| `giftCardServiceName`                                      | *string*                                                   | :heavy_minus_sign:                                         | The name of the Gift Card service used.                    |
| `giftCardServiceDefinitionId`                              | *string*                                                   | :heavy_minus_sign:                                         | The Gift Card service definition used.                     |
| `url`                                                      | *string*                                                   | :heavy_minus_sign:                                         | The endpoint for the request.                              |
| `request`                                                  | *string*                                                   | :heavy_minus_sign:                                         | The HTTP body sent to the Gift Card provider.              |
| `response`                                                 | *string*                                                   | :heavy_minus_sign:                                         | The HTTP body received from the Gift Card provider.        |
| `responseStatusCode`                                       | *number*                                                   | :heavy_minus_sign:                                         | The HTTP response status code from the Gift Card provider. |