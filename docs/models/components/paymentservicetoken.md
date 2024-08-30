# PaymentServiceToken

Base model with JSON encoders.

## Example Usage

```typescript
import { PaymentServiceToken } from "@gr4vy/sdk/models/components";

let value: PaymentServiceToken = {
    id: "f1a3a2fa-9467-4739-a51a-a52c3f5ad019",
    paymentMethodId: "da1ffe78-f097-4b00-b4f1-5471b5e6e13b",
    paymentServiceId: "99d488e1-e91e-4450-ad2a-bd44269802d5",
    status: "processing",
    createdAt: new Date("2022-06-10T12:00:14.907Z"),
    updatedAt: new Date("2024-01-13T21:17:10.500Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.Type](../../models/components/type.md)                                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paymentMethodId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paymentServiceId`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.PaymentMethodStatus](../../models/components/paymentmethodstatus.md)              | :heavy_check_mark:                                                                            | An enumeration.                                                                               |
| `approvalUrl`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `token`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |