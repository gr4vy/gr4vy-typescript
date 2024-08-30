# ApplePayPaymentMethodRequest

Details for a Apple Pay payment method.

## Example Usage

```typescript
import { ApplePayPaymentMethodRequest } from "@gr4vy/sdk/models/components";

let value: ApplePayPaymentMethodRequest = {
    method: "applepay",
    token: {},
    cardSuffix: "1234",
    cardType: "credit",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `method`                                                                                                         | [components.ApplePayRequestPaymentMethodMethod](../../models/components/applepayrequestpaymentmethodmethod.md)   | :heavy_check_mark:                                                                                               | `applepay`.                                                                                                      | applepay                                                                                                         |
| `token`                                                                                                          | [components.Token](../../models/components/token.md)                                                             | :heavy_check_mark:                                                                                               | The encrypted (opaque) token that was passed to the `onpaymentauthorized`<br/>callback by the Apple Pay integration. |                                                                                                                  |
| `cardSuffix`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Last 4 digits of the PAN for identification purposes.                                                            | 1234                                                                                                             |
| `cardScheme`                                                                                                     | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The scheme/brand of the card.                                                                                    |                                                                                                                  |
| `cardType`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The type of card.                                                                                                | credit                                                                                                           |