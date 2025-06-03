# GetPaymentServiceRequest

## Example Usage

```typescript
import { GetPaymentServiceRequest } from "@gr4vy/sdk/models/operations";

let value: GetPaymentServiceRequest = {
  paymentServiceId: "fffd152a-9532-4087-9a4f-de58754210f0",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `paymentServiceId`                                      | *string*                                                | :heavy_check_mark:                                      | the ID of the payment service                           | fffd152a-9532-4087-9a4f-de58754210f0                    |
| `applicationName`                                       | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |                                                         |