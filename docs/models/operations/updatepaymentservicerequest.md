# UpdatePaymentServiceRequest

## Example Usage

```typescript
import { UpdatePaymentServiceRequest } from "@gr4vy/sdk/models/operations";

let value: UpdatePaymentServiceRequest = {
    paymentServiceId: "73e63562-a7b4-408f-85e3-d48fdaf313a1",
    paymentServiceUpdate: {
        acceptedCurrencies: ["EUR", "GBP", "USD"],
        acceptedCountries: ["DE", "GB", "US"],
    },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `paymentServiceId`                                                                 | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `paymentServiceUpdate`                                                             | [components.PaymentServiceUpdate](../../models/components/paymentserviceupdate.md) | :heavy_check_mark:                                                                 | N/A                                                                                |