# ApiRoutersPaymentMethodsSchemasCardPaymentMethodCreate

Card

Card details to use in a transaction or to register a new payment method.

## Example Usage

```typescript
import { ApiRoutersPaymentMethodsSchemasCardPaymentMethodCreate } from "@gr4vy/sdk/models/components";

let value: ApiRoutersPaymentMethodsSchemasCardPaymentMethodCreate = {
    expirationDate: "<value>",
    number: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `expirationDate`                                       | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `number`                                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `buyerExternalIdentifier`                              | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `buyerId`                                              | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `externalIdentifier`                                   | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `cardType`                                             | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `method`                                               | [components.Method](../../models/components/method.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `securityCode`                                         | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |