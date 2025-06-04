# ExpirePaymentLinkRequest

## Example Usage

```typescript
import { ExpirePaymentLinkRequest } from "@gr4vy/sdk/models/operations";

let value: ExpirePaymentLinkRequest = {
  paymentLinkId: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `paymentLinkId`                                         | *string*                                                | :heavy_check_mark:                                      | The unique identifier for the payment link.             | a1b2c3d4-5678-90ab-cdef-1234567890ab                    |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |