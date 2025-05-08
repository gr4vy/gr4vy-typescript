# CreatePaymentServiceSessionRequest

## Example Usage

```typescript
import { CreatePaymentServiceSessionRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentServiceSessionRequest = {
  paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
  requestBody: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `paymentServiceId`                                      | *string*                                                | :heavy_check_mark:                                      | the ID of the payment service                           | fffd152a-9532-4087-9a4f-de58754210f0                    |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |
| `requestBody`                                           | Record<string, *any*>                                   | :heavy_check_mark:                                      | N/A                                                     |                                                         |