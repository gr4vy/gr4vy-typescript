# UpdatePaymentServiceRequest

## Example Usage

```typescript
import { UpdatePaymentServiceRequest } from "@gr4vy/sdk/models/operations";

let value: UpdatePaymentServiceRequest = {
    paymentServiceId: "055756f5-d56d-40bd-8af2-dfe13db4f62c",
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