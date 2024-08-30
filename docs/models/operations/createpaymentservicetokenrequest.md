# CreatePaymentServiceTokenRequest

## Example Usage

```typescript
import { CreatePaymentServiceTokenRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentServiceTokenRequest = {
    paymentMethodId: "5aa8e482-4d0a-4b40-b508-8e51862065e9",
    paymentServiceTokenCreate: {
        paymentServiceId: "04f3b119-4b8a-4bf6-83a7-9f9dfe0ab7da",
        redirectUrl: "https://pricey-fang.com",
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `paymentMethodId`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `paymentServiceTokenCreate`                                                                  | [components.PaymentServiceTokenCreate](../../models/components/paymentservicetokencreate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |