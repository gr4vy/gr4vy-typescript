# ListPaymentOptionsRequest

## Example Usage

```typescript
import { ListPaymentOptionsRequest } from "@gr4vy/sdk/models/operations";

let value: ListPaymentOptionsRequest = {
  paymentOptionRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `applicationName`                                                                  | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `merchantAccountId`                                                                | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of the merchant account to use for this request.                            |
| `paymentOptionRequest`                                                             | [components.PaymentOptionRequest](../../models/components/paymentoptionrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |