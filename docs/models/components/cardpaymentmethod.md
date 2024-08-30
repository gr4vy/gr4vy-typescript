# CardPaymentMethod

Base model with JSON encoders.

## Example Usage

```typescript
import { CardPaymentMethod } from "@gr4vy/sdk/models/components";

let value: CardPaymentMethod = {
    number: "<value>",
    expirationDate: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `method`                                                                                 | [components.CardPaymentMethodMethod](../../models/components/cardpaymentmethodmethod.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `number`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `expirationDate`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `securityCode`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |