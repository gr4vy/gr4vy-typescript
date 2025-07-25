# GetRefundRequest

## Example Usage

```typescript
import { GetRefundRequest } from "@gr4vy/sdk/models/operations";

let value: GetRefundRequest = {
  refundId: "6a1d4e46-14ed-4fe1-a45f-eff4e025d211",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `refundId`                                              | *string*                                                | :heavy_check_mark:                                      | The ID of the refund                                    | 6a1d4e46-14ed-4fe1-a45f-eff4e025d211                    |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |