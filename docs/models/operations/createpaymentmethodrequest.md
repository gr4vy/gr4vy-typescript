# CreatePaymentMethodRequest

## Example Usage

```typescript
import { CreatePaymentMethodRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentMethodRequest = {
  requestBody: {
    id: "4137b1cf-39ac-42a8-bad6-1c680d5dab6b",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `applicationName`                                       | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |
| `merchantAccountId`                                     | *string*                                                | :heavy_minus_sign:                                      | The ID of the merchant account to use for this request. |
| `requestBody`                                           | *operations.CreatePaymentMethodBody*                    | :heavy_check_mark:                                      | N/A                                                     |