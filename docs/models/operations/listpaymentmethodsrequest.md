# ListPaymentMethodsRequest

## Example Usage

```typescript
import { ListPaymentMethodsRequest } from "@gr4vy/sdk/models/operations";

let value: ListPaymentMethodsRequest = {
  cursor: "ZXhhbXBsZTE",
  buyerId: "fe26475d-ec3e-4884-9553-f7356683f7f9",
  buyerExternalIdentifier: "buyer-12345",
  externalIdentifier: "payment-method-12345",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `cursor`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | A pointer to the page of results to return.                                        | ZXhhbXBsZTE                                                                        |
| `limit`                                                                            | *number*                                                                           | :heavy_minus_sign:                                                                 | The maximum number of items that are at returned.                                  | 20                                                                                 |
| `buyerId`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | The ID of the buyer to filter payment methods by.                                  | fe26475d-ec3e-4884-9553-f7356683f7f9                                               |
| `buyerExternalIdentifier`                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | The external identifier of the buyer to filter payment methods by.                 | buyer-12345                                                                        |
| `status`                                                                           | [components.PaymentMethodStatus](../../models/components/paymentmethodstatus.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `externalIdentifier`                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | The external identifier of the payment method to filter by.                        | payment-method-12345                                                               |