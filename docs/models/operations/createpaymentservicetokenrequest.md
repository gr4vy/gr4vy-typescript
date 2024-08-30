# CreatePaymentServiceTokenRequest

## Example Usage

```typescript
import { CreatePaymentServiceTokenRequest } from "@gr4vy/sdk/models/operations";

let value: CreatePaymentServiceTokenRequest = {
    paymentMethodId: "b445e80c-a55e-4fd2-8e45-7e1858b6a89f",
    paymentServiceTokenCreate: {
        paymentServiceId: "be3a5aa8-e482-44d0-ab40-75088e518620",
        redirectUrl: "http://gorgeous-tic.name",
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `paymentMethodId`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `paymentServiceTokenCreate`                                                                  | [components.PaymentServiceTokenCreate](../../models/components/paymentservicetokencreate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |