# CreatePaymentMethodRequest

## Example Usage

```typescript
import { CreatePaymentMethodRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentMethodRequest = {
  requestBody: {
    expirationDate: "12/30",
    number: "4111111111111111",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |
| `requestBody`                                           | *operations.CreatePaymentMethodBody*                    | :heavy_check_mark:                                      | N/A                                                     |