# ApprovePaymentServiceTokenGetRequest

## Example Usage

```typescript
import { ApprovePaymentServiceTokenGetRequest } from "@gr4vy/sdk/models/operations";

let value: ApprovePaymentServiceTokenGetRequest = {
    paymentMethodId: "46973e9d-88a7-44a6-abfe-be4ff0134ff4",
    paymentServiceTokenId: "7e7ede54-616a-422e-8f58-89a79ae2baea",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `paymentMethodId`                    | *string*                             | :heavy_check_mark:                   | The ID of the payment method.        | 46973e9d-88a7-44a6-abfe-be4ff0134ff4 |
| `paymentServiceTokenId`              | *string*                             | :heavy_check_mark:                   | The ID of the payment service token. | 7e7ede54-616a-422e-8f58-89a79ae2baea |