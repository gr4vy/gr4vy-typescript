# GetRefundRequest

## Example Usage

```typescript
import { GetRefundRequest } from "@gr4vy/sdk/models/operations";

let value: GetRefundRequest = {
  refundId: "6a1d4e46-14ed-4fe1-a45f-eff4e025d211",
  xGr4vyMerchantAccountId: "default",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `refundId`                                              | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | 6a1d4e46-14ed-4fe1-a45f-eff4e025d211                    |
| `xGr4vyMerchantAccountId`                               | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. | default                                                 |